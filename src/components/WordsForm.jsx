import React from 'react'
import { useForm } from 'react-hook-form'

const WordsForm = ({ onGenerateText }) => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onFormSubmit = (data) => {
    onGenerateText(data.count, data.lang);
  }

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className='flex flex-col'
    >
      <div className='text-2xl mb-2'>You can change the number of words</div>
      <div className='relative'>
        <input
          type="text"
          {...register('count', { required: true, pattern: /^\d+$/, min: 5, max: 500 })}
          placeholder='Change count of words'
          className='text-lg px-3 py-2 outline-slate-600  rounded-md w-full  placeholder:tracking-wide placeholder:text-black'
        />
        {errors.count?.type === 'required' && <div className='text-red-500 font-medium absolute'>Count is required!</div>}
        {errors.count?.type === 'pattern' && <div className='text-red-500 font-medium absolute'>Count must be a number</div>}
        {(errors.count?.type === 'min' || errors.count?.type === 'max') && <div className='text-red-500 font-medium absolute'>Count should be greater than 5 and less than 500</div>}
      </div>

      <div className='text-2xl mt-6 mb-2'>You can change the language</div>
      <select
        {...register('lang')}
        defaultValue='en'
        className='text-lg px-3 py-2 outline-none rounded-md mb-5 w-full'
      >
        <option value="en" className='checked:bg-amber-300 bg-slate-400 font-medium'>English language</option>
        <option value="de" className='checked:bg-amber-300 bg-slate-400 font-medium'>German language</option>
        <option value="es" className='checked:bg-amber-300 bg-slate-400 font-medium'>Spanish language</option>
        <option value="it" className='checked:bg-amber-300 bg-slate-400 font-medium'>Italian language</option>
      </select>

      <input
        type="submit"
        value="Create text"
        className={`py-3 bg-amber-300 text-xl rounded-md font-medium`}
      />
    </form>
  )
}

export default WordsForm