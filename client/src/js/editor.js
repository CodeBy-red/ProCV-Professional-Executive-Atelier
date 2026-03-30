let resumeData = {
    exp: [],
    edu: []
};

function addItem(type) {
    const id = Date.now();
    const container = document.getElementById(`list-${type}`);
    
    const html = `
        <div class="dynamic-item" id="${type}-${id}" style="border-left: 1px solid #333; padding-left: 15px; margin-bottom: 25px;">
            <input type="text" placeholder="${type === 'exp' ? 'EMPRESA' : 'INSTITUIÇÃO'}" oninput="updateData('${type}', ${id}, 'title', this.value)">
            <input type="text" placeholder="${type === 'exp' ? 'CARGO EXECUTIVO' : 'CURSO / GRAU'}" oninput="updateData('${type}', ${id}, 'sub', this.value)">
            
            <div class="row">
                <div class="date-field">
                    <label style="font-size:0.6rem; color:#555">INÍCIO</label>
                    <input type="text" placeholder="MM/AAAA" oninput="updateData('${type}', ${id}, 'start', this.value)">
                </div>
                <div class="date-field">
                    <label style="font-size:0.6rem; color:#555">FIM</label>
                    <input type="text" id="end-${type}-${id}" placeholder="MM/AAAA" oninput="updateData('${type}', ${id}, 'end', this.value)">
                </div>
            </div>

            <label class="current-toggle">
                <input type="checkbox" onchange="toggleCurrent('${type}', ${id}, this)"> Atualmente nesta posição
            </label>

            <button onclick="removeItem('${type}', ${id})" style="color:#666; font-size:0.6rem; cursor:pointer; background:none; border:none; letter-spacing:1px; margin-top:5px;">[ REMOVER REGISTRO ]</button>
        </div>
    `;
    
    container.insertAdjacentHTML('beforeend', html);
    resumeData[type].push({ id, title: '', sub: '', start: '', end: '', isCurrent: false });
}

function toggleCurrent(type, id, checkbox) {
    const item = resumeData[type].find(i => i.id === id);
    const endInput = document.getElementById(`end-${type}-${id}`);
    
    if (item) {
        item.isCurrent = checkbox.checked;
        if (item.isCurrent) {
            endInput.value = "";
            endInput.disabled = true;
            endInput.style.opacity = "0.3";
            item.end = "Atualmente";
        } else {
            endInput.disabled = false;
            endInput.style.opacity = "1";
            item.end = endInput.value;
        }
        renderList(type);
    }
}

function updateData(type, id, field, value) {
    const item = resumeData[type].find(i => i.id === id);
    if(item) {
        item[field] = value;
        renderList(type);
    }
}

function removeItem(type, id) {
    document.getElementById(`${type}-${id}`).remove();
    resumeData[type] = resumeData[type].filter(i => i.id !== id);
    renderList(type);
}

function renderList(type) {
    const previewContainer = document.getElementById(`pv-list-${type}`);
    previewContainer.innerHTML = resumeData[type].map(i => `
        <div class="pv-item">
            <h4>${i.sub || 'TÍTULO'}</h4>
            <span>${i.title || 'ORGANIZAÇÃO'} | ${i.start || 'INÍCIO'} — ${i.end || 'FIM'}</span>
        </div>
    `).join('');
}