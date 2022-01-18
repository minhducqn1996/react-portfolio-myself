import React from 'react'
import { NavLink } from 'react-router-dom'
import { Github, Twitter, Facebook, YouTube } from '../components/AllSvgs'
import styled from 'styled-components'
import { darkTheme } from '../components/Themes';
import {motion} from 'framer-motion';

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;

z-index:3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}
`

const Line = styled(motion.span)`
width: 2px;
height: 6rem;
background-color: ${props => props.theme === 'dark' ? darkTheme.text : darkTheme.body};
`

const SocialIcons = (props) => {
    return (
        <Icons>
            <motion.div
                initial={{transform: "scale(0)"}}
                animate={{scale: [0,1,1.5,1]}}
                transition={{type:'spring', duration:1, delay:1}}
            >
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://www.facebook.com/minhduc.nguyen.pt"}} >
                    <Github width={25} height={25} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{transform: "scale(0)"}}
                animate={{scale: [0,1,1.5,1]}}
                transition={{type:'spring', duration:1, delay:1.2}}
            >   
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://www.facebook.com/minhduc.nguyen.pt"}} >
                    <Twitter width={25} height={25} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{transform: "scale(0)"}}
                animate={{scale: [0,1,1.5,1]}}
                transition={{type:'spring', duration:1, delay:1.4}}
            >
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://www.facebook.com/minhduc.nguyen.pt"}} >
                    <Facebook width={25} height={25} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{transform: "scale(0)"}}
                animate={{scale: [0,1,1.5,1]}}
                transition={{type:'spring', duration:1, delay:1.6}}
            >
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname: "https://www.facebook.com/minhduc.nguyen.pt"}} >
                    <YouTube width={25} height={25} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </motion.div>
            <Line 
                theme={props.theme} 
                initial={
                    {
                        height: 0
                    }
                }
                animate={{
                    height:'6rem'
                }}
                transition={{
                    type: 'spring',
                    duration: 1,
                    delay: 0.8
                }}
            />
        </Icons>
    )
}

export default SocialIcons;
