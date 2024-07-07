import styles from '../styles/Share.module.scss';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

const copy = async (value) => {
    try {
        await navigator.clipboard.writeText(value);
    } catch (err) {
        toast.error('Something went wrong.', {
            position: 'bottom-center',
            id: 'clipboard',
        });
        return;
    }
    toast.success('Copied!', {
        position: 'bottom-center',
        id: 'clipboard',
    });
};

const Share = (props) => {
    const { suid, uuid, filesize } = props;
    const link = `https://p2p.mindes.ru/${suid}`;
    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
            <Toaster
                toastOptions={{
                    className: styles.toaster,
                    style: {
                        borderRadius: '16px',
                        padding: '5px 5px 5px 10px',
                    },
                    success: {
                        iconTheme: {
                            primary: '#2EA7F8',
                            secondary: 'black',
                        },
                    },
                }}
            />
            <div className={styles.background}></div>

            <div className={styles.id} onClick={() => copy(uuid)}>
                ID: {uuid}
            </div>

            <div className={styles.content}>
                <div className={styles.content__header}>
                    <span className={styles.highlight}>Link</span> to your file
                </div>
                <div
                    className={styles.content__browse}
                    onClick={() => copy(link)}
                >
                    {link}
                </div>
                <div className={styles.content__size}>Size: {filesize}mb</div>
            </div>
        </motion.div>
    );
};
export default Share;
