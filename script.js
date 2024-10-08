//your JS code here. If required.
let out = document.getElementById('output')
function Output() {
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(out.innerHTML = 'Hello, world!')
		},1000)
	})
}

Output();
