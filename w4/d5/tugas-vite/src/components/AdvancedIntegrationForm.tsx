import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

const profileSchema = z.object({
name: z.string().min(2, "Nama minimal 2 karakter"),
email: z.string().email("Format email tidak valid"),
photo: z
.instanceof(FileList)
.refine(
(files) => files.length > 0,
"Silakan unggah foto profil terlebih dahulu"
)
.refine(
(files) => files[0]?.size <= MAX_FILE_SIZE,
"Ukuran file maksimal 2MB"
)
.refine(
(files) => ACCEPTED_IMAGE_TYPES.includes(files[0]?.type),
"Hanya menerima JPG, PNG, dan WEBP"
),
});

type ProfileFormData = z.infer<typeof profileSchema>;

export default function ProfileUploadForm() {
const [preview, setPreview] = useState<string | null>(null);
const {
register,
handleSubmit,
formState: { errors },
watch,
} = useForm<ProfileFormData>({ resolver: zodResolver(profileSchema) });

const photoFile = watch("photo");

const onSubmit = (data: ProfileFormData) => {
const photoUrl = URL.createObjectURL(data.photo[0]);
setPreview(photoUrl);
};

return (
<div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
<form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-xl p-6 w-full max-w-md space-y-5" >
<h2 className="text-xl font-semibold text-gray-800 text-center">
Upload Foto Profil
</h2>

    <div>
      <label className="block mb-1 text-sm font-medium">Nama</label>
      <input
        {...register("name")}
        placeholder="Masukkan nama"
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
      />
      {errors.name && (
        <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
      )}
    </div>

    <div>
      <label className="block mb-1 text-sm font-medium">Email</label>
      <input
        {...register("email")}
        placeholder="contoh@email.com"
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
      />
      {errors.email && (
        <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
      )}
    </div>

    <div>
      <label className="block mb-1 text-sm font-medium">Foto Profil</label>
      <input
        {...register("photo")}
        type="file"
        accept="image/*"
        className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:ring focus:ring-blue-300 focus:outline-none"
      />
      {errors.photo && (
        <p className="text-sm text-red-500 mt-1">{errors.photo.message}</p>
      )}
    </div>

    {photoFile && photoFile.length > 0 && (
      <div className="mt-4">
        <p className="text-sm text-gray-600 mb-2">Preview:</p>
        <img
          src={URL.createObjectURL(photoFile[0])}
          alt="Preview"
          className="w-32 h-32 object-cover rounded-full mx-auto border border-gray-200"
        />
      </div>
    )}

    <button
      type="submit"
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md py-2 transition"
    >
      Simpan Profil
    </button>

    {preview && (
      <div className="mt-6 text-center">
        <h3 className="text-md font-semibold">Hasil Upload</h3>
        <img
          src={preview}
          alt="Uploaded Preview"
          className="w-32 h-32 rounded-full mx-auto mt-2 object-cover"
        />
      </div>
    )}
  </form>
</div>


);
}