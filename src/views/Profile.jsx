import { useContext, useEffect } from 'react'
import { Items } from '../components/Items'
import { ProductContext } from '../contexts/product_provider'
import { Layout } from '../layouts/Layout'
import { UserContext } from '../contexts/user_provider'

import { UserAvatar } from '../components/UserAvatar'
import { useMyProducts } from '../hooks/useMyProducts'
import { FileForm } from '../components/forms/FileForm'
import { useForm } from 'react-hook-form'
import { getBase64 } from '../utils/utils'
import { CarApi } from '../api/CarApi'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

export const Profile = () => {
  const { user, setUser } = useContext(UserContext)

  const { wishlistItems, getWishListItems } = useContext(ProductContext)
  const [myProducts] = useMyProducts()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {

      const arr = Array.from(data.avatar)
      const promises = arr.map(file => getBase64(file));
      let photos = await Promise.all(promises);

      data.avatar = photos[0]

      const res = await CarApi.post('/users/avatar', data)

      if (res.status == 200) {
        const token = res.data.token
        localStorage.setItem('token', token)

        const logged_user = res.data.user
        setUser(logged_user)

        toast.success('Avatar actualizado correctamente')
      }
    } catch (error) {
      toast.error('Error al actualizar avatar')
    }

  }

  useEffect(() => {
    getWishListItems
  }, [])

  return (
    <>
      <Layout>
        <section className="min-h-[200px] overflow-hidden bg-white py-3 ">
          <div className="container mx-auto p-10">
            <div className="flex gap-10">
              <div className="self-start pb-10 max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto bg-white shadow-xl rounded-lg text-gray-900 flex flex-col items-center">
                <div className="rounded-t-lg h-48 overflow-hidden">
                  <img
                    className="object-cover object-top w-full"
                    src='/assets/images/profile_banner_car.jpg'
                    alt='photo' />
                </div>

                <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                  <UserAvatar user={user} />
                </div>


                <div className="w-8">
                  <motion.div
                    className="bg-indigo-800 p-2 rounded-full shadow-lg cursor-pointer text-white relative -mt-5 flex"
                    onClick={() => document.getElementById('upload_avatar_modal').showModal()}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                    </svg>
                  </motion.div>
                </div>


                <div className="text-center mt-2">
                  <h2 className="font-extrabold text-xl text-indigo-800">
                    {user?.name}
                  </h2>
                  <p className="text-gray-800 text-sm">{user?.email}</p>
                  <p className="text-gray-700 text-xs">{user?.phone}</p>

                </div>
                <ul className="py-4 mt-2 text-gray-700 flex items-center justify-center gap-8">
                  <li className="flex flex-col items-center justify-around">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="24" height="24" style={{ width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)', preserveAspectRatio: "xMidYMid meet" }}><defs><clipPath id="__lottie_element_19"><rect width="30" height="30" x="0" y="0"></rect></clipPath></defs><g clipPath="url(#__lottie_element_19)">
                        <g style={{ display: 'block', transform: "matrix(1,0,0,1,1.75,18.75)" }} opacity="1">
                          <g opacity="1" transform="matrix(1,0,0,1,13.25,3.25)">
                            <path fill="rgb(0,0,0)" fillOpacity="1" d=" M-13,-3 C-13,-3 -9,-3 -9,-3 C-9,-3 -9,1 -9,1 C-9,2.1040000915527344 -9.895999908447266,3 -11,3 C-12.104000091552734,3 -13,2.1040000915527344 -13,1 C-13,1 -13,-3 -13,-3z M9,-3 C9,-3 9,1 9,1 C9,2.1040000915527344 9.895999908447266,3 11,3 C12.104000091552734,3 13,2.1040000915527344 13,1 C13,1 13,-3 13,-3 C13,-3 9,-3 9,-3z"></path></g></g>
                        <g transform="matrix(1,0,0,1,1.75,3.197421073913574)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,13.25,9.25)"><path fill="rgb(0,0,0)" fillOpacity="1" d=" M11.206000328063965,-0.4410000145435333 C11.206000328063965,-0.4410000145435333 9.14799976348877,-6.321000099182129 9.14799976348877,-6.321000099182129 C8.586999893188477,-7.922999858856201 7.068999767303467,-9 5.370999813079834,-9 C5.370999813079834,-9 -5.370999813079834,-9 -5.370999813079834,-9 C-7.068999767303467,-9 -8.586999893188477,-7.922999858856201 -9.147000312805176,-6.322000026702881 C-9.147000312805176,-6.322000026702881 -11.204999923706055,-0.44200000166893005 -11.204999923706055,-0.44200000166893005 C-12.303999900817871,0.2809999883174896 -13,1.5299999713897705 -13,2.9030001163482666 C-13,2.9030001163482666 -13,8.45300006866455 -13,8.45300006866455 C-8.814000129699707,8.810999870300293 -4.623000144958496,8.98900032043457 -0.42399999499320984,9 C-0.42399999499320984,9 0,9 0,9 C0,9 0.37700000405311584,9 0.37700000405311584,9 C4.577000141143799,8.98799991607666 8.78499984741211,8.809000015258789 13,8.45300006866455 C13,8.45300006866455 13,2.9030001163482666 13,2.9030001163482666 C13,1.5299999713897705 12.303000450134277,0.2809999883174896 11.206000328063965,-0.4410000145435333z M-8.404999732971191,-2.38700008392334 C-8.404999732971191,-2.38700008392334 -7.258999824523926,-5.660999774932861 -7.258999824523926,-5.660999774932861 C-6.978000164031982,-6.4629998207092285 -6.2210001945495605,-7 -5.370999813079834,-7 C-5.370999813079834,-7 5.370999813079834,-7 5.370999813079834,-7 C6.2210001945495605,-7 6.979000091552734,-6.4629998207092285 7.258999824523926,-5.660999774932861 C7.258999824523926,-5.660999774932861 8.404999732971191,-2.38700008392334 8.404999732971191,-2.38700008392334 C8.585000038146973,-1.8730000257492065 8.156000137329102,-1.3539999723434448 7.617000102996826,-1.440000057220459 C5.656000137329102,-1.7569999694824219 3.134999990463257,-2 0,-2 C-3.134999990463257,-2 -5.656000137329102,-1.7569999694824219 -7.617000102996826,-1.440000057220459 C-8.156000137329102,-1.3539999723434448 -8.585000038146973,-1.8730000257492065 -8.404999732971191,-2.38700008392334z M-8.5,5 C-9.32800006866455,5 -10,4.328000068664551 -10,3.5 C-10,2.671999931335449 -9.32800006866455,2 -8.5,2 C-7.671999931335449,2 -7,2.671999931335449 -7,3.5 C-7,4.328000068664551 -7.671999931335449,5 -8.5,5z M3,4 C3,4 -3,4 -3,4 C-3.552000045776367,4 -4,3.552000045776367 -4,3 C-4,2.447999954223633 -3.552000045776367,2 -3,2 C-3,2 3,2 3,2 C3.552000045776367,2 4,2.447999954223633 4,3 C4,3.552000045776367 3.552000045776367,4 3,4z M8.5,5 C7.671999931335449,5 7,4.328000068664551 7,3.5 C7,2.671999931335449 7.671999931335449,2 8.5,2 C9.32800006866455,2 10,2.671999931335449 10,3.5 C10,4.328000068664551 9.32800006866455,5 8.5,5z"></path></g></g></g></svg>
                      <div></div>
                    </div>
                    <div className='text-center text-xs text-indigo-500 mt-2'>
                      <span className="badge rounded-full bg-indigo-400 text-white text-xs"> {myProducts.length} </span>
                    </div>

                  </li>

                  <li className="flex flex-col items-center justify-around">
                    <div className="text-indigo-800">
                      <svg width="40px" viewBox="0 0 24 24" className="h-6 w-6" >
                        <path
                          fill="currentColor"
                          d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                        />
                      </svg>
                    </div>
                    <div className='text-center text-xs text-indigo-500 mt-2'>
                      <span className="badge rounded-full bg-indigo-400 text-white text-xs"> {wishlistItems.length} </span>
                    </div>

                  </li>
                </ul>

              </div>
              <div className="w-2/3">
                <Items title="Mis Vehiculos" products={myProducts} className="lg:grid-cols-2 sm:grid-cols-1" />
              </div>
            </div>

            <Items title="Vehiculos Favoritos" products={wishlistItems} className="lg:grid-cols-3 sm:grid-cols-1" />
          </div>

        </section>
        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="upload_avatar_modal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Subir Avatar</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-10 grid grid-cols-[1fr] gap-5">
                <div>
                  <FileForm
                    label=""
                    placeholder="Acá expláyate y escribe todo lo que se te ocurra"
                    id="product_description"
                    fontSize="text-sm"
                    name="avatar"
                    multiple={false}
                    register={register}
                  />
                  {errors.photos && <RequiredValidation />}
                </div>
              </div>

              <div className="mt-24 flex justify-end">
                <button className="bg-yellow-500 text-gray-100 p-4 rounded-lg tracking-wide w-full
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-900
                                shadow-lg px-4"
                >
                  Subir Avatar
                </button>
              </div>
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </Layout >


    </>
  )
}

