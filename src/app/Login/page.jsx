export default function Example() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>


            <button className="flex w-full items-center justify-center rounded-md bg-white text-gray-800 px-3 py-1.5 KKtext-sm font-semibold hover:bg-red-100 border border-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.1 10c0-1.05.38-1.92 1.02-2.58v-.01l.01-.01c.73-.74 1.72-1.2 2.81-1.2 2.16 0 3.68 1.53 3.68 3.4 0 1.88-1.3 3.38-3.19 3.38h-.02c-1.55 0-2.41-.91-2.81-1.64H6.91v1.29c.65.38 1.53.61 2.53.61 2.02 0 3.65-1.45 3.65-3.35 0-1.9-1.63-3.37-3.65-3.37-1.17 0-2.1.47-2.81 1.22l-.03.03-.13.13-.12-.13-.11-.11-.01-.01-.02-.02-.02-.02c-.08-.08-.15-.16-.22-.25l-.01-.01c-.65-.77-1.56-1.39-2.55-1.39C1.45 4 0 5.41 0 7.26c0 1.83 1.55 3.24 3.91 3.24 1.13 0 2.07-.35 2.76-.95h.03c.02-.01.03-.02.05-.03l.05-.04v-.01l.05-.04.05-.04.06-.05c.01-.01.03-.02.04-.03l.03-.02c.27-.23.53-.49.78-.76.03-.03.05-.05.08-.08h.01c.23-.25.45-.51.66-.78l.01-.01c.05-.06.1-.12.14-.18l.06-.09c.3-.48.61-.98.87-1.49l.06-.12.08-.16.07-.15c.3-.64.48-1.35.48-2.09zm-.05 0c0 .66-.27 1.28-.73 1.73-.46.45-1.07.72-1.73.72-.67 0-1.28-.27-1.73-.72C.42 11.28.15 10.67.15 10c0-.66.27-1.28.73-1.73C1.58 7.81 2.19 7.54 2.86 7.54c.67 0 1.28.27 1.73.72.46.45.73 1.07.73 1.74z"
                  clipRule="evenodd"
                />
              </svg>
              Google
            </button>

            {/* <div className="flex justify-center space-x-2">
              <button className="flex items-center justify-center bg-white text-gray-800 px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-red-100 border border-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4.1 10c0-1.05.38-1.92 1.02-2.58v-.01l.01-.01c.73-.74 1.72-1.2 2.81-1.2 2.16 0 3.68 1.53 3.68 3.4 0 1.88-1.3 3.38-3.19 3.38h-.02c-1.55 0-2.41-.91-2.81-1.64H6.91v1.29c.65.38 1.53.61 2.53.61 2.02 0 3.65-1.45 3.65-3.35 0-1.9-1.63-3.37-3.65-3.37-1.17 0-2.1.47-2.81 1.22l-.03.03-.13.13-.12-.13-.11-.11-.01-.01-.02-.02-.02-.02c-.08-.08-.15-.16-.22-.25l-.01-.01c-.65-.77-1.56-1.39-2.55-1.39C1.45 4 0 5.41 0 7.26c0 1.83 1.55 3.24 3.91 3.24 1.13 0 2.07-.35 2.76-.95h.03c.02-.01.03-.02.05-.03l.05-.04v-.01l.05-.04.05-.04.06-.05c.01-.01.03-.02.04-.03l.03-.02c.27-.23.53-.49.78-.76.03-.03.05-.05.08-.08h.01c.23-.25.45-.51.66-.78l.01-.01c.05-.06.1-.12.14-.18l.06-.09c.3-.48.61-.98.87-1.49l.06-.12.08-.16.07-.15c.3-.64.48-1.35.48-2.09zm-.05 0c0 .66-.27 1.28-.73 1.73-.46.45-1.07.72-1.73.72-.67 0-1.28-.27-1.73-.72C.42 11.28.15 10.67.15 10c0-.66.27-1.28.73-1.73C1.58 7.81 2.19 7.54 2.86 7.54c.67 0 1.28.27 1.73.72.46.45.73 1.07.73 1.74z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </button>
            </div> */}

          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
