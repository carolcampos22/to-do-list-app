import styles from "../app/styles/Modal.module.scss"

type ConfirmDeleteModalProps = {
  onConfirm: () => void;
  onCancel: () => void;
};

export const ConfirmDeleteModal = ({ onConfirm, onCancel }: ConfirmDeleteModalProps) => (
  <div className={styles.modal}>
    <div className={styles.modal_content}>
      <h2>Deletar tarefa</h2>
      <p>Tem certeza que você deseja deletar essa tarefa?</p>
      <div className={styles.buttons_container}>
        <button className={styles.cancel_button} onClick={onCancel}>Cancelar</button>
        <button className={styles.delete_button} onClick={onConfirm}>Deletar</button>
      </div>
    </div>
  </div>
);
