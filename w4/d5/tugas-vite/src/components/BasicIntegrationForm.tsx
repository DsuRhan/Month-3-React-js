import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"

const formSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  email: z.string().email("Format email tidak valid"),
  password: z.string().min(6, "Minimal 6 karakter"),
})

type FormData = z.infer<typeof formSchema>

export default function BasicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    console.log("Data registrasi:", data)
    await new Promise((r) => setTimeout(r, 500)) // simulasi loading
    alert("Registrasi berhasil!")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center">Form Registrasi</h2>

        <div>
          <label className="block text-sm font-medium mb-1">Nama</label>
          <input
            {...register("name")}
            placeholder="Masukkan nama"
            className={clsx(
              "w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400",
              errors.name && "border-red-500"
            )}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            {...register("email")}
            placeholder="Masukkan email"
            className={clsx(
              "w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400",
              errors.email && "border-red-500"
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            {...register("password")}
            placeholder="Masukkan password"
            className={clsx(
              "w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400",
              errors.password && "border-red-500"
            )}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={clsx(
            "w-full py-2 rounded-md text-white font-medium transition",
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          )}
        >
          {isSubmitting ? "Memproses..." : "Daftar"}
        </button>
      </form>
    </div>
  )
}
