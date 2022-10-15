import React from "react";
import { FaTimes } from "react-icons/fa";
import Modal from "../../../../shared/Modal";
const AddBoost = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <div
          className=" w-full rounded-md bg-black py-4 px-6"
          style={{ boxShadow: "#a5a5a5eb 0px 0px 9px 0px" }}
        >
          <div className="mb-2 flex items-center justify-between">
            <div />
            <h2 className="px-5 py-2 text-center font-Inter text-2xl font-bold text-olive">
              Add Boost
            </h2>
            <FaTimes
              className="block text-2xl text-olive hover:cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div className="h-80 overflow-y-auto">{/* content goes here */}</div>
        </div>
      </Modal>
    </>
  );
};

export default AddBoost;
