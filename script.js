const gross = document.getElementById('gross');
		const vat = document.getElementById('vat');
		const net = document.getElementById('net');
		const reset = document.getElementById('reset');

		reset.addEventListener('click', () => {
			gross.value = '';
			vat.textContent = '';
			net.textContent = '';
			gross.focus();
		});

		gross.addEventListener('input', () => {
			const grossAmount = parseFloat(gross.value);
			const vatAmount = (grossAmount / 6).toFixed(2);
			const netAmount = (grossAmount - vatAmount).toFixed(2);
			gross.textContent = grossAmount;
			vat.textContent = vatAmount;
			net.textContent = netAmount;
		});

		const copyIcons = document.querySelectorAll('.copy-icon');

		copyIcons.forEach((copyIcon) => {
		  const targetId = copyIcon.dataset.target;
		  const targetElement = document.getElementById(targetId);
		
		  copyIcon.addEventListener('click', () => {
		    const range = document.createRange();
		    range.selectNode(targetElement);
		
		    const selection = window.getSelection();
		    selection.removeAllRanges();
		    selection.addRange(range);
		
		    document.execCommand('copy');
		    selection.removeAllRanges();
		
		  });
		});