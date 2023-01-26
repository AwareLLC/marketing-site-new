import Image from 'next/image'
import logoImage from '@/images/aware-logo-dark.png'

export function Logo(props) {
  return (
    <Image style={{ margin: 'auto' }} src={logoImage} alt="" width={250} height={100} />
  )
}
