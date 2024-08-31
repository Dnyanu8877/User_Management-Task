
const apiBaseUrl = 'https://localhost:7021/api/users'; 

document.getElementById('registerForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();

    const userName = document.getElementById('userName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const birthdate = document.getElementById('birthdate').value;
    const address = document.getElementById('address').value.trim();

    if (!userName || userName.length < 3 || userName.length > 50) {
        alert('Username must be between 3 and 50 characters long.');
        return;
    }

    if (!email || !validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!password || password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    const user = {
        userName,
        email,
        password, 
        birthdate,
        address,
        createdDate: new Date().toISOString() 
    };

    try {
        debugger;
        await fetch(apiBaseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        alert('User registered successfully!');
        document.getElementById('registerForm').reset(); 
    } catch (error) {
        console.error('Error registering user:', error);
        alert('Error registering user');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

async function loadUsers() {
    try {
        const response = await fetch("https://localhost:7021/api/Users");
        const users = await response.json();

        const tableBody = document.querySelector('#usersTable tbody');
        tableBody.innerHTML = '';

        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.userName}</td>
                <td>${user.email}</td>
                <td>${user.birthdate ? new Date(user.birthdate).toLocaleDateString() : ''}</td>
                <td>${user.address}</td>
                <td>
                    <button onclick="editUser(${user.userId})">Edit</button>
                    <button onclick="deleteUser(${user.userId})">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error loading users:', error);
    }
}


// Delete user
async function deleteUser(userId) {
    try {
        await fetch(`https://localhost:7021/api/Users/${userId}`, {
            method: 'DELETE'
        });
        alert('User deleted successfully!');
        loadUsers();
    } catch (error) {
        console.error('Error deleting user:', error);
        alert('Error deleting user');
    }
}

if (document.querySelector('#usersTable')) {
    loadUsers();
}
