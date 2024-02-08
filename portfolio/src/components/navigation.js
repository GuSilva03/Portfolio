import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import avatar from '../img/avatar.jpg';
function Navigation(){
    return(
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt=""/>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/home" activeClassName="active-class">Home
    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/sobre" activeClassName="active-class">Sobre  
    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resumo" activeClassName="active-class">Resumo
    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolio" activeClassName="active-class">Portfolio  
    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/blogs" activeClassName="active-class">Blogs
    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contatos" activeClassName="active-class">Contatos  
    </NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>@2024 Meus Projetos</p>
            </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 2px solid var(--border-color);
    .avatar{
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 2rem 0;
        img{
            width: 80%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
    }

    .nav-items{
        width: 100%;
        text-align: center;
        li{
            display: block;
            a{
                display:block;
                padding: .2rem 0;
                position: relative;
                &:hover{
                    cursor: pointer;
                    background-color: white;
                }
                &::before{
                    content:"";
                    position:absolute;
                    bottom: 0;
                    left: 0;
                    width: 1rem;
                    height: 100%;
                    background-color: red;
                }
            }
        }
    }
    footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        p{
            padding: 2rem 0;
            font-size: 1.1rem;
            display: block;
            text-align: center;
        }
    }
`;
export default Navigation;