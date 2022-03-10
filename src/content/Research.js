import React from 'react';  
import Latex from 'react-latex';


class Research extends React.Component {  
    constructor(props) {
        super(props);
        this.handleClick.bind(this);
    } 

    handleClick = () =>  {
        this.props.setStateOfParent("0");
    }

    render() {  
    return (
<   div className='popup' style={(this.props.show) ? {display: "block"} : {display: "none"}} >  
    <div className='popup_open'> 
    <div className="tm-bg-gray set-hidden-overflow">
            <a href="#/" className="tm-close-popup" onClick={this.handleClick}>
                return home
                <i className="fas fa-times"></i>
            </a>
            <div>
                <h2 className="tm-color-primary tm-page-title tm-text-center">Research</h2>
                <div id="container">
                    <div id="wrapper">
                        <div id="content">
                                    <h3><strong>Fixed Point Theory</strong></h3>
                                        <p>
                                        I am currently investigating examples of weakly compact convex subsets that do not possess the fixed point property for nonexpansive maps [1][3]. In one important result I analyzed specific matrix structures using NumPy, which were representations of linear combinations of simple functions in <Latex>$L^1[0, 1]$</Latex>. I used Convex Analysis, Measure Theory, and Linear Algebra to construct an asymptotically isometric copy of <Latex>$L^1[0, 1]$</Latex> in a particular weakly compact convex set denoted as <Latex>$D_\infty(h)$</Latex>, where <Latex>$h(t) = 1/2$</Latex> for all <Latex>$t \in [0,1]$</Latex>. Note that <Latex>$D_\infty(h)$</Latex> is an example of a subset <Latex>$L^1[0, 1]$</Latex> that fails to have the fix point property for a non-expansive mapping.[2] 
                                        </p>
                                    <h3><strong>Local Optimization</strong></h3>
                                        <p>
                                        I am also studying how the theory of finite normalized tight frames (FNTFs) is developed in Hilbert spaces (both finite and infinite-dimensional). An influential theorem is the characterization of all FNTFs in terms of the minima of a potential energy function. This was designed to measure the total orthogonality of a Bessel sequence [4]. I am particularly interested in their connections in Deep Learning and Sparse Approximation [5][6]. One fascinating connection is the deep frame potential: it's a measure of coherence that is approximately related to representation stability but has minimizers based solely on the network structure [7]. 
                                        </p>
                                </div>
                            </div>
                            <div id="navigation">
                                <h3><strong>Key Words</strong></h3>
                                <ul>
                                    <li>Weakly Compact</li>
                                    <li>Non-Expansive Mappings</li>
                                    <li>Asymptotically Isometric Copy</li>
                                    <li>Deep Learning</li>
                                    <li>Deep Frames</li>
                                    <li>Convex subsets</li>
                                    <li>Minima</li>
                                    <li>Frame Potential</li>
                                    <li>Finite Normalized Tight Frames</li>
                                    <li>Bessel Sequences</li>
                                    <li>Sparse Approximation</li>
                                    <li>Potential Energy Function</li>
                                    <li>Minimizers</li>
                                </ul>
                            </div>
                            <div id="extra" className="tm-bg-gray">
                                <table>
                                <tbody>
                                <tr>
                                    <th>Amazing Papers to Read!</th>
                                </tr>
                                <tr>
                                    <td>[1] D.E. Alspach, A fixed point free nonexpansive map, Proc. Amer. Math. Soc. 82 (1981), 423-424. MR 82j:47070</td>
                                </tr>
                                <tr>
                                    <td>[2] P.N. Dowling, C.J. Lennard, B. Turett, New fixed point free nonexpansive maps on weakly compact, convex subsets of L [0, 1], Studia Math. 180 (3)(2007) 271–284.</td>
                                </tr>
                                <tr>
                                    <td>[3] P.N. Dowling and C.J. Lennard, Every nonreflexive subspace of L1[0, 1]fails the fixed point property, Proceedings of the American Mathematical Society 125(2) (1997), 443-446.</td>
                                </tr>
                                <tr>
                                    <td>[4] John Benedetto and Matthew Fickus. Finite normalized tightframes. Advances in Computational Mathematics, 18(2-4),2003. 5, 6</td>
                                </tr>
                                <tr>
                                    <td>[5] Calvin Murdock, MingFang Chang, and Simon Lucey.Deep component analysis via alternating direction neuralnetworks. In European Conference on Computer Vision(ECCV), 2018. 1, 3, 4</td>
                                </tr>
                                <tr>
                                    <td>[6] Vardan Papyan, Yaniv Romano, and Michael Elad. Convolutional neural networks analyzed via convolutional sparsecoding. Journal of Machine Learning Research (JMLR),18(83), 2017. 1, 3, 4</td>
                                </tr>
                                <tr>
                                    <td>[7] Murdock, Calvin and Cazenavette, George and Lucey, Simon. (2022). Reframing Neural Networks: Deep Structure in Overcomplete Representations. IEEE Transactions on Pattern Analysis and Machine Intelligence. PP. 1-1. 10.1109/TPAMI.2022.3149445</td>
                                </tr>
                                </tbody>
                                </table>
                            </div>
                    </div> 
            </div>            
        </div>
    </div>  
</div>  
);  
}  
}  
export default Research;