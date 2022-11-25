import { useEffect, useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/src/ReactCrop.scss";
import Modal from "../core/Modal";

export default function ChangeProfilePic({ open, onClose }) {
  const [file, setFile] = useState(null);
  const [imageSize, setImageSize] = useState({ height: 500, width: 500 });
  const [crop, setCrop] = useState();
  const [scale, setScale] = useState(1);
  const [val, setVal] = useState(null);

  const handleSave = async () => {
    console.log(val);
    const formData = new FormData();
    formData.append("avatar", val);
    try {
      const res = await fetch(
        "https://backend.metaviralpro.com/social/api/v1/avatar",
        { method: "POST", body: formData }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log({ error });
    }
  };

  const handleScale = (e) => {
    const value = e.target.value;
    if (value * imageSize.height < 500 || value * imageSize.width < 500) {
      return;
    }
    setScale(value);
  };

  const handleChange = (e) => {
    setVal(e.target.files[0]);
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined);
      setImageSize(e.target.files[0]);
      const reader = new FileReader();
      const img = new Image(e.target.files[0]);
      reader.addEventListener("load", () => {
        img.src = reader.result;
        img.onload = () => {
          console.log(img);
          setImageSize({ height: img.naturalHeight, width: img.naturalWidth });
          setFile(reader.result?.toString() || "");
        };
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  useEffect(() => {
    setCrop(undefined);
    setScale(1);
    setFile(null);
  }, [open]);

  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="text-center p-4 border-b border-solid border-gray-400">
        Update profile picture
      </h2>
      <div className="p-4">
        <div className="flex items-center justify-center">
          {file ? (
            <ReactCrop crop={crop} aspect={1} onChange={(c) => setCrop(c)}>
              <div className="h-[70vmin] w-[70vmin] overflow-auto">
                <div
                  style={{
                    minHeight: imageSize.height * scale,
                    minWidth: imageSize.width * scale,
                  }}
                >
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                    alt="img"
                    src={file}
                  />
                </div>
              </div>
            </ReactCrop>
          ) : (
            <label className="h-[70vmin] w-[70vmin]  border border-solid border-gray-500 flex items-center justify-center rounded-md">
              <input
                onChange={handleChange}
                className="hidden"
                type="file"
                accept="image/*"
              />
              Upload Image
            </label>
          )}
        </div>
        {file && (
          <div className="pt-4">
            <input
              value={scale}
              onChange={handleScale}
              min={0.25}
              max={2}
              step={0.02}
              type="range"
              className="w-full"
            />
            <div className="flex justify-end gap-6 pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2 text-yellow-500 hover:text-yellow-600 hover:bg-gray-100 duration-150 transit rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2 text-white bg-yellow-500 hover:bg-yellow-600 duration-150 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
