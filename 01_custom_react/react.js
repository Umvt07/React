
// function customRender(reactElement,container) {
//     const domElement=document.createElement(reactElement.type);
//     domElement.innerHTML=reactElement.children;
//     // domElement.setAttribute('href',reactElement.props.href);
//     // domElement.setAttribute('target',reactElement.props.target);

//     for(let key in reactElement.props){
//         if(key==='children')continue; // just safety now a days no one keep children inside props
//         domElement.setAttribute(key,reactElement.props[key]);
//     }
//     container.appendChild(domElement);
// }

// const reactelement={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit google'
// }

// const main=document.querySelector('#root');

// customRender(reactelement,main);
