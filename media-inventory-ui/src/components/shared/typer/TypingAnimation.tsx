import { TypeAnimation } from 'react-type-animation'

const TypingAnimation = () => {
    return (
        <TypeAnimation
        sequence= {[
            // Same substring at the start will only be twice once, initially
            'An app to store your media collection 💿',
            1000,
            'Share your collection with your friends 💜',
            2000,
            'Your own customized media store 💻',
            1500

        ]}
        speed={50}
        style = {{ 
            fontSize: '50px', 
            color: "white", 
            display: "inline-block", 
            textShadow: "1px 1px 20px #000",
         }}
        repeat = {Infinity}
        />
    )
}
export default TypingAnimation;