import React from "react";
import './navbar.css';

function Navbar () {
    return (
        <>
        <nav id="navigation">
             <div id="show-navigation">
                <input type="text" id="navigation-input" />
                <table>
                    <tbody>
                        <tr>
                            <td className="second-seperator">
                                <div className="nav-seperator"></div>
                            </td>

                            <td className="nav-item">
                                <a className="outdoor-anchor" href="#" name="outdoor">
                                    <span className="span-nav">outdoor</span>
                                </a>
                            </td>

                            <td className="second-seperator">
                                <div className="nav-seperator"></div>
                            </td>

                            <td className="nav-item">
                                <a className="span-anchor" href="#">
                                    <span className="span-nav">Furniture</span>
                                </a>
                            </td>

                            <td className="second-seperator">
                                <div className="nav-seperator"></div>
                            </td>

                            <td className="nav-item">
                                <a className="span-anchor" href="#">
                                    <span className="span-nav">merrors & art</span>
                                </a>
                            </td>

                            <td className="second-seperator">
                                <div className="nav-seperator"></div>
                            </td>

                            <td className="nav-item">
                                <a className="span-anchor" href="#">
                                    <span className="span-nav">decor & more</span>
                                </a>
                            </td>

                            <td className="second-seperator">
                                <div className="nav-seperator"></div>
                            </td>

                            <td className="nav-item">
                                <a className="span-anchor" href="#">
                                    <span className="span-nav">rugs & draperye</span>
                                </a>
                            </td>
                                        
                            <td className="second-seperator">
                                <div className="nav-seperator"></div>
                            </td>

                            <td className="nav-item">
                                <a className="span-anchor" href="#">
                                    <span className="span-nav">lighting</span>
                                </a>
                            </td>
                                        
                            <td className="second-seperator">
                                <div className="nav-seperator"></div>
                            </td>

                            <td className="nav-item">
                                <a className="span-anchor" href="#">
                                    <span className="span-nav">bed & bath</span>
                                </a>
                            </td>

                            <td className="second-seperator">
                                <div className="nav-seperator"></div>
                            </td>

                            <td className="nav-item">
                                <a className="span-anchor" href="#">
                                    <span className="span-nav">fabric</span>
                                </a>
                            </td>

                            <td className="second-seperator">
                                <div className="nav-seperator"></div>
                            </td>

                            <td className="nav-item">
                                <a className="span-anchor" href="#">
                                    <span className="span-nav">sale</span>
                                </a>
                            </td>

                            <td className="second-seperator">
                                <div className="nav-seperator"></div>
                            </td>

                            <td className="nav-item">
                                <a className="span-anchor" href="#">
                                    <span className="span-nav">holiday</span>
                                </a>
                            </td>

                            <td className="second-seperator">
                                <div className="nav-seperator"></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
         </nav>
        </>
    );
}
export default Navbar;
