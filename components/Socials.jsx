import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from 'react-icons/ri'
import Link from 'next/link'

const icons = [
  {
    path: 'https://www.youtube.com/@arsyadfaturrahman844?si=7r3zZ1BlcVjh2DGK',
    name: <RiYoutubeFill />,
  },
  {
    path: 'https://www.linkedin.com/in/arsyad-faturrahman-b5261217b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/calliarca',
    name: <RiGithubFill />,
  },
  {
    path: 'https://www.facebook.com/share/t2RRAU7rDmtdQJXK/?mibextid=sCpJLy',
    name: <RiFacebookFill />,
  },
  {
    path: 'https://www.instagram.com/arsyadftr?igsh=azZxcW9vM3R0dDFr&utm_source=qr',
    name: <RiInstagramFill />,
  },
]

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={containerStyles}>
      {icons.map((icon, index) => (
        <Link href={icon.path} key={index}>
          <div className={iconsStyles}>{icon.name}</div>
        </Link>
      ))}
    </div>
  )
}

export default Socials