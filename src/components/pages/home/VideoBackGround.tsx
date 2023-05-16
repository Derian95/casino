import video from '../../../assets/video.mp4'



export const VideoBackGround = () => {
	return (
		<div >
            <div className=' bg-opacity-50 bg-black h-screen w-screen absolute'></div>
            <video autoPlay loop muted className='h-screen w-screen object-cover'>
			<source src={video} type='video/mp4' />
            </video>
        </div>
	)
}
