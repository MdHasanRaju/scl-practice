import Modal from "../../core/Modal";

export default function WritePost({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vel accusamus pariatur sint placeat saepe dolorem numquam ratione. Vel illo officia repellat, et maxime ut delectus tempore maiores deleniti quibusdam cum eos nihil a dolorum repudiandae quo. Voluptatum, veritatis, atque amet nesciunt quae officia iste distinctio officiis accusantium iusto voluptates?</p>
    </Modal>
  );
}
