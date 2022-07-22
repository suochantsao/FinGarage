export default function LoginLayout(props){
  return (
    <div className='bg-[#3a3d58] h-screen flex items-center'>
      <main className="container mx-auto bg-white rounded">
        {props.children}
      </main>
    </div>
  )
}