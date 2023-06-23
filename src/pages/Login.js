import React from 'react'

const Login = () => {
  return (
    <div>
        <div className='flex justify-center h-screen'>
            <div className='hidden lg:block lg:w-2/3 bg-1'>
                <div className='flex items-center h-full px-20 bg-[#664494] bg-opacity-70'>
                    <div>
                        <h2>CI Nicaragua</h2>
                        <p>Esto es un Login</p>
                    </div>
                </div>
            </div>


            <div className='flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6'>
                <div className='flex-1 '>
                    <div className='text-center'>
                        <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c3d85213-145b-4862-919b-0c5a5dc0ddb6/d92t6vp-b55ee53d-5036-4262-9a32-d1f0ae41f5b4.png/v1/fill/w_600,h_600/esfera_del_dragon_de_6_estrella_render_hd_png_by_todoanimeoficial_d92t6vp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvYzNkODUyMTMtMTQ1Yi00ODYyLTkxOWItMGM1YTVkYzBkZGI2XC9kOTJ0NnZwLWI1NWVlNTNkLTUwMzYtNDI2Mi05YTMyLWQxZjBhZTQxZjViNC5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.XAAKETBoRqaO-q-gd31yy9WIRZGC3Ju6v-b-2kE4FaU' />
                        <p className='mt-3 text-gray-500'>
                            Accede a tu cuenta
                        </p>
                    </div>

                    <div className='mt-8'>
                        <form>
                            <div>
                               <label className='block mb-2 text-sm text-gray-600'>
                                    Correo Electrónico
                                </label> 
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    autoComplete='email'
                                    required
                                    placeholder='ejemplo@ejemplo.com'
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-opacity-40'
                                />
                            </div>
                            <div>
                               <label className='block mb-2 text-sm text-gray-600'>
                                    Contraseña
                                </label> 
                                <input
                                    type='password'
                                    name='password'
                                    id='password'
                                    autoComplete='current-password'
                                    required
                                    placeholder='Coloca tu contraseña'
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-opacity-40'
                                />
                            </div>

                            <div className='mt-6'>
                                <button 
                                    type='submit'
                                    className='w-full px-4 py-2 traking-white text-white transition-colors duration-200 transform bg-[#664494] rounded-md hover:bg-[#9B71B0] '
                                >
                                    Entrar
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Login