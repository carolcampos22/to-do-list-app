import styles from "../app/styles/Modal.module.scss"

type ConfirmDeleteModalProps = {
  onConfirm: () => void;
  onCancel: () => void;
};

export const ConfirmDeleteModal = ({ onConfirm, onCancel }: ConfirmDeleteModalProps) => (
  <div className={styles.modal}>
    <div className={styles.modal_content}> 
      <h2>Confirmar Exclusão</h2>
      <p>Tem certeza que deseja excluir essa tarefa?</p>
      <button onClick={onConfirm}>Confirmar</button>
      <button onClick={onCancel}>Cancelar</button>
    </div>
  </div>
);
