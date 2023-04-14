const secretContent = document.querySelector('#secret-content');
const input = document.querySelector('#secret');
const encrypted = "U2FsdGVkX18JbqpTgnbsktQUYOs/lcTLbZ/CPrUHfn2WdaHzd8LQjxI7grbUOpy460ljNZHD+zLTkLPk8F5Ig1NwWrQV+GpKAeJkSyeBWCjRka73zyKlbL1q9xmYq4mjfXwwZRCYPNmPhUfXAtzSbjZsl3OSrwHfoRMJt4Np4ikWqkpFG8pKFGhnLVbDDx5TCjSKwD3xGHRe3fv2EWWWkQ==";

setInterval(() => {
    const decrypted = CryptoJS.AES.decrypt(encrypted, input.value).toString(CryptoJS.enc.Utf8);

    if (decrypted.includes('evernote')) {
        secretContent.innerHTML = "Login successful!";
        setTimeout(() => {
            window.location = decrypted;
        }, 3000);
    }
}, 3000);
