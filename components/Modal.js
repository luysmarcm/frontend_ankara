import React from 'react'

const Modal = ({ showModal, setshowModal, comentario }) => {
	return (
		<>
			{showModal ? (
				<div className="max-w-max min-w-min justify-center flex fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-lg  md:px-2 lg:px-4 lg:justify-center overflow-hidden">
					<div className="relative bg-rosado  md:w-1/2 lg:w-auto my-6 xl:w-full ">
						<div className="border-2 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none justify-center">
							<div className="flex-row justify-center p-10 sm:py-10 lg:py-16 lg:pl-6">
								<div className="flex flex-wrap items-baseline space-y-6">
									<h3 className="space-y-6">
										<p className="block notranslate text-sm leading-7 font-bold text-whitemd:2xl lg:text-base text-center  ">
											{comentario}
										</p>
									</h3>
								</div>

								<button
									type="button"
									className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
									onClick={() => setshowModal(false)}
								>
									<span className="sr-only">Close</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default Modal