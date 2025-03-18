const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

if (menuIcon && sidebar && content) {
    function toggleSidebar() {
        sidebar.classList.toggle('open');
        menuIcon.classList.toggle('active');
    }

    function toggleSection(sectionId) {
        document.querySelectorAll('.section').forEach((section) => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
        toggleSidebar();
    }

    menuIcon.addEventListener('click', toggleSidebar);

    content.addEventListener('click', () => {
        if (sidebar.classList.contains('open')) {
            toggleSidebar();
        }
    });

    // 只对有 data-section 属性的链接应用切换逻辑
    document.querySelectorAll('.sidebar a[data-section]').forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            toggleSection(sectionId);
        });
    });

    // 为 "Login" 和 "Sign Up" 按钮添加事件，确保跳转
    document.querySelectorAll('.sidebar a:not([data-section])').forEach((link) => {
        link.addEventListener('click', (e) => {
            toggleSidebar(); // 关闭侧边栏
            // 不阻止默认行为，允许 href 跳转
        });
    });
}