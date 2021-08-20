import React, { useState, useContext } from "react";
import "./modal.css";

const ModalContext = React.createContext();

const ModalButton = function () {
    let { isModalOpen, setIsModalOpen } = useContext(ModalContext);

    return (
        <button
            type="button"
            className="modal-open-button"
            onClick={function () {
                setIsModalOpen(!isModalOpen);
            }}
        >
            OPEN MODAL
        </button>
    );
};

const ModalBody = function () {
    let { isModalOpen, setIsModalOpen } = useContext(ModalContext);

    return (
        <div className={isModalOpen ? "modal-body modal-open" : "modal-body"}>
            <h2 className="modal-title">Modal Content</h2>
            <button
                type="button"
                className="modal-close-button"
                onClick={function () {}}
            >
                <svg
                    className="sidebar-close-button"
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 352 512"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={function () {
                        setIsModalOpen(!isModalOpen);
                    }}
                >
                    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                </svg>
            </button>
        </div>
    );
};

export default function Modal() {
    let [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
            <ModalButton />
            <ModalBody />
        </ModalContext.Provider>
    );
}
