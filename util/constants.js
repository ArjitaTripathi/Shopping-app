import Versace from '../public/images/photos/versace.png'
import Gucci from '../public/images/photos/gucci.png'
import Prada from '../public/images/photos/prada.png'
import Zara from '../public/images/photos/zara.png'
import cKlien from '../public/images/photos/cklien.png'
import Casual from '../public/images/photos/casual.png'
import Formal from '../public/images/photos/formal.png'
import Gym from '../public/images/photos/gym.png'
import Swim from '../public/images/photos/swimsuit.png'
import Wedding from '../public/images/photos/wedding.png'
import Party from '../public/images/photos/party.png'

export const BrandImages = [
    {
        src: Versace,
        height: "130",
        width: "150"
    },
    {
        src: Gucci,
        height: "70",
        width: "150"
    },
    {
        src: Prada,
        height: "200",
        width: "150"
    },
    {
        src: Zara,
        height: "30",
        width: "150"
    },
    {
        src: cKlien,
        height: "50",
        width: "150"
    },
]

export const ClothesTypes = [
    {
        name:'Casual',
        src: Casual,
        objectFit: 'contain',
    },
    {
        name: 'Formal',
        src: Formal,
        objectFit: 'cover',
    },
    {
        name: 'Party',
        src: Party,
        objectFit: 'cover',
    },
    {
        name: 'Wedding',
        src: Wedding,
        objectFit: 'cover',
    },
    {
        name: 'Gym',
        src: Gym,
        objectFit: 'contain',
    },
    {
        name: 'Swim',
        src: Swim,
        objectFit: 'contain',
    }
]