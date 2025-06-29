import { AnimatePresence ,motion} from "framer-motion";

const Modal = ({ modalData, onClose }) => {
  if (!modalData) return null;

  return (
    <AnimatePresence>
      <motion.div
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg p-6 max-w-2xl w-full relative mx-4  max-h-[90vh] overflow-y-auto"
        >
          <button className="sticky top-2 right-3 text-black text-xl" onClick={onClose}>
            &times;
          </button>
          <h2 className="text-2xl font-sbold mb-4 text-center text-blue-950">{modalData.title}</h2>
          <p className="text-black font-bold mb-4">{modalData.company}</p>
          <p className="text-sm text-gray-400 italic mb-2">{modalData.date}</p>
          <p className="text-gray-700">{modalData.desc}</p>
          <p className="text-gray-700 whitespace-pre-line">{modalData.more}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
