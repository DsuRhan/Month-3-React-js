import { useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"

// --- SCHEMA UTAMA ---
const formSchema = z.object({
name: z.string().min(1, "Nama wajib diisi"),
email: z.string().email("Email tidak valid"),
address: z.string().min(5, "Alamat terlalu pendek"),
city: z.string().min(2, "Kota wajib diisi"),
payment: z.enum(["credit", "bank", "cod"] as const, {
  required_error: "Pilih metode pembayaran",
}),
})

type FormData = z.infer<typeof formSchema>

// --- COMPONENT ---
export default function MultiStepForm() {
const [step, setStep] = useState(0)
const stepFields = [
["name", "email"],
["address", "city"],
["payment"],
]
const isLastStep = step === stepFields.length - 1

const {
register,
handleSubmit,
trigger,
formState: { errors },
} = useForm<FormData>({
resolver: zodResolver(formSchema),
mode: "onChange",
})

const onSubmit: SubmitHandler<FormData> = (data) => {
console.log("Checkout Data:", data)
alert("Checkout berhasil!")
}

const handleNext = async () => {
const valid = await trigger(stepFields[step] as (keyof FormData)[])
if (valid) setStep((s) => s + 1)
}

const handleBack = () => setStep((s) => s - 1)

return (
<div className="min-h-screen flex items-center justify-center bg-gray-50">
<form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-5" >
{/* Progress Indicator */}
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">
Step {step + 1} / {stepFields.length}
</span>
<div className="w-1/2 h-2 bg-gray-200 rounded-full overflow-hidden">
<div
className="h-full bg-blue-500 rounded-full transition-all duration-300"
style={{ width: `${((step + 1) / stepFields.length) * 100}%` }}
/>
</div>
</div>

    {/* Step 1 */}
    {step === 0 && (
      <>
        <h2 className="text-xl font-semibold">Informasi Pengguna</h2>
        <div>
          <label className="block text-sm mb-1">Nama</label>
          <input
            {...register("name")}
            className={clsx(
              "w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400",
              errors.name && "border-red-500"
            )}
            placeholder="Nama lengkap"
          />
          {errors.name?.message && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            {...register("email")}
            className={clsx(
              "w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400",
              errors.email && "border-red-500"
            )}
            placeholder="contoh@email.com"
          />
          {errors.email?.message && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
      </>
    )}

    {/* Step 2 */}
    {step === 1 && (
      <>
        <h2 className="text-xl font-semibold">Alamat Pengiriman</h2>
        <div>
          <label className="block text-sm mb-1">Alamat</label>
          <input
            {...register("address")}
            className={clsx(
              "w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400",
              errors.address && "border-red-500"
            )}
            placeholder="Jl. Contoh No. 123"
          />
          {errors.address?.message && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1">Kota</label>
          <input
            {...register("city")}
            className={clsx(
              "w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400",
              errors.city && "border-red-500"
            )}
            placeholder="Nama kota"
          />
          {errors.city?.message && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
        </div>
      </>
    )}

    {/* Step 3 */}
    {step === 2 && (
      <>
        <h2 className="text-xl font-semibold">Metode Pembayaran</h2>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="credit"
              {...register("payment")}
            />{" "}
            Kartu Kredit
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" value="bank" {...register("payment")} />{" "}
            Transfer Bank
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" value="cod" {...register("payment")} /> COD
          </label>
          {errors.payment?.message && (
            <p className="text-red-500 text-sm">
              {errors.payment.message}
            </p>
          )}
        </div>
      </>
    )}

    {/* Navigation Buttons */}
    <div className="flex justify-between pt-4">
      {step > 0 && (
        <button
          type="button"
          onClick={handleBack}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Kembali
        </button>
      )}

      {!isLastStep ? (
        <button
          type="button"
          onClick={handleNext}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Lanjut
        </button>
      ) : (
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Selesai
        </button>
      )}
    </div>
  </form>
</div>


)
}