import ProfilePicture from '../ProfilePicture/ProfilePicture'
import AddCommentSvg from '../Svg/AddCommentSvg'
import AddImageSvg from '../Svg/AddImageSvg'
import AddVideoSvg from '../Svg/AddVideoSvg'
import LoveReactSvg from '../Svg/LoveReactSvg'
import SaveSvg from '../Svg/SaveSvg'

export default function PostFooter() {
  return (
    <div className="flex items-center gap-2">
          <ProfilePicture width={48} height={48} /> 
          <div className="bg-[#F7F7F7] w-[100%] before:content-[''] before:absolute before:left-[66px] before:border-8 before:border-transparent before:border-solid before:border-r-[#F7F7F7] px-3 py-[4px] rounded-lg flex items-center gap-2 m-2">
            <input
              className="text-[#8F8F8F] bg-transparent text-[12px] w-[100%] border-none focus:ring-0"
              type="text"
              placeholder="Write your comment"
            />
            <AddVideoSvg />
            <AddImageSvg />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <LoveReactSvg />
              <p className="text-[14px] text-[#000000]">1.2k</p>
            </div>
            <div className="flex items-center gap-2">
              <AddCommentSvg />
              <p className="text-[14px] text-[#000000]">1.2k</p>
            </div>
            <div className="flex items-center gap-2">
              <SaveSvg />
            </div>
          </div>
        </div>
  )
}
