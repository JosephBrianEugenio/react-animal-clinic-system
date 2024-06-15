import React from "react";

const CreateRecordDialog = ({isVisible, onClose
}) => {
    if(!isVisible) return null;
  return (
    <>
    <div className="fixed inset-0 bg-black bg-opacity-30  flex justify-center items-center">
        <div className="bg-white p-2 rounded">Hello
        <div>
            <button onClick={onClose()}>close</button>
        </div>
        </div>
    </div>
    </>
  );
};

export default CreateRecordDialog;
