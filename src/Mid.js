import React from 'react'
import MyImage from './appdata/img.png'

import Image1 from './appdata/img1.png'
import Image2 from './appdata/img2.png'
import Image3 from './appdata/img3.png'
export default function Mid() {
  return (
    <>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
    <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden mt-20 md:h-80 md:w-80">
        <img src={MyImage} alt="horse" />
            </div>
      <h1 className="text-5xl font-bold">Naila Nusrat Jahan</h1>
      <p className="py-6">photographer graphic designer react developer...</p>
      <button className="btn btn-primary">Hire me!</button>
      <div className="mockup-code mt-10">
  <pre data-prefix="$"><code>let's see my photos together!</code></pre> 
  <pre data-prefix=">" className="text-warning"><code>installing...</code></pre> 
  <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
</div>
    </div>
  </div>
</div>



<div className="mockup-window border bg-base-300">
  <div className="flex justify-center px-4 py-16 bg-base-200">            <section className='flex space-x-10'>

<div className="card w-96 bg-base-100 shadow-xl">
<figure><img src={Image1} alt="Shoes" /></figure>
<div className="card-body">
<h2 className="card-title">
Photo 1
<div className="badge badge-secondary">NEW</div>
</h2>
<p>Location : Dhaka Bangladesh</p>
<div className="card-actions justify-end">
<div className="badge badge-outline">Iphone 11</div> 
<div className="badge badge-outline">Mobile photography</div>
</div>
</div>
</div>


<div className="card w-96 bg-base-100 shadow-xl">
<figure><img src={Image2} alt="" /></figure>
<div className="card-body">
<h2 className="card-title">
Photo 2
<div className="badge badge-secondary">NEW</div>
</h2>
<p>Location : Dhaka Bangladesh</p>
<div className="card-actions justify-end">
<div className="badge badge-outline">Iphone 11</div> 
<div className="badge badge-outline">Mobile photography</div>
</div>
</div>
</div>


<div className="card w-96 bg-base-100 shadow-xl">
<figure><img src={Image3} alt="Shoes" /></figure>
<div className="card-body">
<h2 className="card-title">
photo 3
<div className="badge badge-secondary">NEW</div>
</h2>
<p>Location : Dhaka Bangladesh</p>
<div className="card-actions justify-end">
<div className="badge badge-outline">Iphone 11</div> 
<div className="badge badge-outline">Mobile photography</div>
</div>
</div>
</div>


    
</section>
</div>
</div>
<section className='flex flex-col justify-center items-center mt-5'>
<div className="indicator">
  <div className="indicator-item indicator-bottom">
    <button className="btn btn-primary">log in</button>
  </div> 
  <div className="card border">
    <div className="card-body">
      <h2 className="card-title">Log in for more content</h2> 
      <p>Rerum reiciendis beatae tenetur excepturi</p>
    </div>
  </div>
</div>
</section>
<section>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Join us!</h1>
      <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptas earum repellat corrupti voluptate.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
    
    
    </>


  )
}
