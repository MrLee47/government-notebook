/* General Styles */
body {
    font-family: 'Courier New', Courier, monospace; /* Classic font */
    background-color: #e0e0e0; /* Light grey background */
    color: #333; /* Dark text */
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Container for the whole layout */
.container {
    width: 800px; /* Fixed width for the old-school look */
    display: flex;
    background-color: #fefefe; /* White background for the content */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Sidebar Styles */
.sidebar {
    width: 200px;
    background-color: #2e2e2e; /* Dark sidebar */
    color: #fff; /* White text */
    padding: 10px;
    box-sizing: border-box;
    overflow-y: auto; /* Scrollbar for the pages */
    height: 100vh;
}

.sidebar h2 {
    font-size: 18px;
    margin-bottom: 15px;
    text-align: center;
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar ul li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}

.sidebar ul li .page-title {
    flex-grow: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.sidebar ul li .menu {
    position: relative;
    cursor: pointer;
}

.sidebar ul li .menu .dropdown {
    display: none;
    position: absolute;
    right: 0;
    background-color: #444;
    color: #fff;
    border: 1px solid #333;
    padding: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    z-index: 10;
}

.sidebar ul li .menu:hover .dropdown {
    display: block;
}

.sidebar ul li .menu .dropdown button {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    display: block;
    width: 100%;
    padding: 5px;
    text-align: left;
}

.sidebar ul li .menu .dropdown button:hover {
    background-color: #555;
}

.sidebar button {
    width: 100%;
    padding: 5px;
    background-color: #444; /* Darker button */
    color: #fff;
    border: none;
    cursor: pointer;
    margin-top: 10px;
}

.sidebar button:hover {
    background-color: #555; /* Slightly lighter on hover */
}

/* Content Area Styles */
.content {
    flex: 1;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff; /* White background */
    border-left: 2px solid #ccc; /* Border to separate sidebar */
}

#page-content {
    width: 100%;
    height: calc(100vh - 60px); /* Adjust height based on the viewport */
    border: none;
    padding: 10px;
    box-sizing: border-box;
    font-size: 16px;
    background-color: #f5f5f5; /* Light grey textarea */
    resize: none;
}

/* Scrollbar Styling */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-thumb {
    background-color: #888;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #555;
}
