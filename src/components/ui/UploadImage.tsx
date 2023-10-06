import Image from "next/image";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

function UploadImage({ name }: { name: string }) {
    const [image, setImage] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const { setValue } = useFormContext();
    // multiple image input change
    const handleSingleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImage([file]);

            const reader = new FileReader();
            reader.onload = () => {
                if (typeof reader.result === 'string') {
                    setImagePreviews([reader.result]);
                }
            };
            setValue(name, file);
            reader.readAsDataURL(file);
        }
    };

    // multile image upload
    return (
        <>
            <div className="upload">
                <h2>Upload Image</h2>

                <div>
                    {imagePreviews?.map((preview, index) => (
                        <Image
                            key={index}
                            src={preview}
                            alt={`Preview ${index}`}
                            width={200}
                            height={200}
                        />
                    ))}
                </div>

                <form >

                    <input
                        type="file"
                        onChange={handleSingleImage}

                    />
                </form>
            </div>
        </>
    );
}

export default UploadImage;