function SignIn() {
  return (
    <ul className='grid grid-cols-2'>
      <li>
        <img
          className="w-4/5 mx-auto lg:w-2/5 lg:py-10 hover:translate-x-10"
          src={window.location.origin + "/images/signin.png"}
          alt=""
        />        
      </li>
      <li>登入2</li>
    </ul>
  );
}

export default SignIn;
