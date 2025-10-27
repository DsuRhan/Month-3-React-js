import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"

const formSchema = z.object({
  email: z.string().email("Format email tidak valid"),
  password: z.string().min(6, "Minimal 6 karakter"),
  username: z.string().min(3, "Minimal 3 karakter"),
  birthdate: z.string().min(1, "Tanggal lahir wajib diisi"),
})

type FormData = z.infer<typeof formSchema>

export function MultiStepForm() {
  const [step, setStep] = useState(1)
  const { register, handleSubmit, formState, trigger, getValues } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  })

  const nextStep = async () => {
    const fieldsPerStep = {
      1: ["email", "password"],
      2: ["username"],
      3: ["birthdate"],
    } as const

    // Validasi field di step aktif
    const currentFields = fieldsPerStep[step]
    const valid = await trigger(currentFields)
    if (valid) setStep((s) => Math.min(s + 1, 3))
  }

  const prevStep = () => setStep((s) => Math.max(s - 1, 1))
  const onSubmit = (data: FormData) => console.log("Form selesai:", data)

  const progress = (step / 3) * 100

  const isStepValid = (() => {
    switch (step) {
      case 1:
        return (
          !!getValues("email") &&
          !!getValues("password") &&
          !formState.errors.email &&
          !formState.errors.password
        )
      case 2:
        return !!getValues("username") && !formState.errors.username
      case 3:
        return !!getValues("birthdate") && !formState.errors.birthdate
      default:
        return false
    }
  })()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
        <div className="h-2 bg-gray-200 rounded-full mb-6">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <h2 className="text-xl font-semibold text-center">Langkah 1: Akun</h2>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  className={clsx(
                    "border rounded-md w-full p-2",
                    formState.errors.email && "border-red-500"
                  )}
                />
                {formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{formState.errors.email.message}</p>
                )}
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                  className={clsx(
                    "border rounded-md w-full p-2",
                    formState.errors.password && "border-red-500"
                  )}
                />
                {formState.errors.password && (
                  <p className="text-red-500 text-sm mt-1">{formState.errors.password.message}</p>
                )}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <h2 className="text-xl font-semibold text-center">Langkah 2: Profil</h2>
              <div>
                <input
                  type="text"
                  placeholder="Username / Nickname"
                  {...register("username")}
                  className={clsx(
                    "border rounded-md w-full p-2",
                    formState.errors.username && "border-red-500"
                  )}
                />
                {formState.errors.username && (
                  <p className="text-red-500 text-sm mt-1">{formState.errors.username.message}</p>
                )}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <h2 className="text-xl font-semibold text-center">Langkah 3: Tanggal Lahir</h2>
              <div>
                <input
                  type="date"
                  {...register("birthdate")}
                  className={clsx(
                    "border rounded-md w-full p-2",
                    formState.errors.birthdate && "border-red-500"
                  )}
                />
                {formState.errors.birthdate && (
                  <p className="text-red-500 text-sm mt-1">{formState.errors.birthdate.message}</p>
                )}
              </div>
            </div>
          )}

          <div className="flex justify-between pt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
              >
                Kembali
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={!isStepValid}
                className={clsx(
                  "ml-auto px-4 py-2 rounded-md transition",
                  isStepValid
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                )}
              >
                Lanjut
              </button>
            ) : (
              <button
                type="submit"
                disabled={!formState.isValid}
                className={clsx(
                  "ml-auto px-4 py-2 rounded-md transition",
                  formState.isValid
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                )}
              >
                Selesai
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}