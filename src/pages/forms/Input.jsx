

export default function Input({field}) {
  return (
    <div className="mb-6 md:bg-gray-100 bg-white">
        {field.type === 'textarea' ?
        <textarea className="h-[6.8rem] w-full bg-transparent px-3" {...field}></textarea>:
        <input className="h-[3rem] w-full bg-transparent px-3" {...field} />
    }
    </div>
  )
}
