import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"
import { useState } from "react"

// 🔹 Schema validation
const productSchema = z.object({
products: z
.array(
z.object({
name: z.string().min(1, "Nama produk wajib diisi"),
price: z
.number({ error: "Harga harus berupa angka" })
.min(1000, "Harga minimal Rp 1.000"),
})
)
.min(1, "Minimal 1 produk diperlukan"),
})

type ProductForm = z.infer<typeof productSchema>

export default function DynamicProductForm() {
const [submitted, setSubmitted] = useState<ProductForm | null>(null)

const {
register,
handleSubmit,
control,
formState: { errors },
} = useForm<ProductForm>({
resolver: zodResolver(productSchema),
defaultValues: {
products: [{ name: "", price: 0 }],
},
mode: "onChange",
})

const { fields, append, remove } = useFieldArray({
control,
name: "products",
})

const onSubmit = (data: ProductForm) => {
setSubmitted(data)
}

return (
<div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
<form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg space-y-5 transition-all duration-300" >
<h2 className="text-xl font-semibold text-gray-700">Daftar Produk</h2>

    {/* 🔹 Dynamic Fields */}
    {fields.map((field, index) => (
      <div
        key={field.id}
        className={clsx(
          "flex flex-col sm:flex-row sm:items-center gap-3 border-b pb-3 transition-all duration-300",
          index === fields.length - 1 && "animate-fade-in"
        )}
      >
        <div className="flex-1">
          <input
            {...register(`products.${index}.name` as const)}
            placeholder="Nama produk"
            className={clsx(
              "w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400",
              errors.products?.[index]?.name && "border-red-500"
            )}
          />
          {errors.products?.[index]?.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.products[index]?.name?.message}
            </p>
          )}
        </div>

        <div className="flex-1">
          <input
            type="number"
            {...register(`products.${index}.price`, { valueAsNumber: true })}
            placeholder="Harga (Rp)"
            className={clsx(
              "w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400",
              errors.products?.[index]?.price && "border-red-500"
            )}
          />
          {errors.products?.[index]?.price && (
            <p className="text-red-500 text-sm mt-1">
              {errors.products[index]?.price?.message}
            </p>
          )}
        </div>

        {fields.length > 1 && (
          <button
            type="button"
            onClick={() => remove(index)}
            className="text-red-500 hover:text-red-700 text-sm font-medium"
          >
            Hapus
          </button>
        )}
      </div>
    ))}

    {/* 🔹 Add Product Button */}
    <button
      type="button"
      onClick={() => append({ name: "", price: 0 })}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      + Tambah Produk
    </button>

    {/* 🔹 Submit */}
    <button
      type="submit"
      className="block w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 mt-3 transition"
    >
      Simpan Daftar
    </button>

    {/* 🔹 Form-level Error */}
    {errors.products?.message && (
      <p className="text-red-500 text-center text-sm">
        {errors.products.message}
      </p>
    )}
  </form>

  {/* 🔹 Preview */}
  {submitted && (
    <div className="mt-8 bg-white p-4 rounded-lg shadow-md w-full max-w-lg">
      <h3 className="font-semibold text-gray-700 mb-2">Data Produk:</h3>
      <ul className="list-disc ml-5 space-y-1">
        {submitted.products.map((p, i) => (
          <li key={i}>
            {p.name} — Rp {p.price.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  )}
</div>


)
}