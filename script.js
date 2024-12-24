// Data for team members
const teamMembers = [
    {
        name: 'Rajat Rajput',
        role: 'Microsoft Learn Student Ambassador & Community Leader',
        imageSrc: './assets/members/rajat.jpg',
        profileLink: 'https://www.linkedin.com/in/rajatrajput2004/'
    },
    {
        name: 'Diksha',
        role: 'Ex - AIML Intern @ Mishka Tech | Summer Intern\'24 @ OHSL | Summer Intern\'23 @ MNNIT Allahabad | Co-Chairperson @ MLSC Amity | AIML Enthusiast',
        imageSrc: './assets/members/diksha.jpg',
        profileLink: 'https://www.linkedin.com/in/diksha1406/'
    },

    {
        name: 'Aadya Chopra',
        role: 'Former-Intern @BharatXR | Design Team Lead @ MLSC | Amity\'26 | B tech CSE with Data Science (Hons) | Data Science | UI/UX Designing | Graphics Designing',
        imageSrc: './assets/members/aadya.jpg',
        profileLink: 'https://www.linkedin.com/in/aadyachopra/'
    },
    {
        name: 'Anam Singh',
        role: 'Dedicated and driven CSE undergrad with a passion for Software Development. Currently pursuing my bachelor\'s degree at Amity University. Eager to apply my technical skills and problem-solving abilities to real-world projects. Seeking opportunities to collaborate with talented developers and gain hands-on experience in the tech industry. Worked as an Assistant Program Manager in Season of AI conducted by MLSC Amity ✨',
        imageSrc: './assets/members/anam.jpg',
        profileLink: 'https://www.linkedin.com/in/anam-singh-142182231/'
    },
    {
        name: 'Ananyaa M',
        role: 'BTech CSE Undergraduate | AI/ML and Software enthusiast',
        imageSrc: './assets/members/ananyaa.jpg',
        profileLink: 'https://www.linkedin.com/in/ananyaa-m-78b2a9229/'
    },
    {
        name: 'Anurag Yadav',
        role: 'Data Science Enthusiast | Exploring DSA and Web Development',
        imageSrc: './assets/members/anurag.jpg',
        profileLink: 'https://www.linkedin.com/in/imanurag2311/'
    },
    {
        name: 'Archi Awana',
        role: 'Computer engineering student',
        imageSrc: './assets/members/archi.jpg',
        profileLink: 'https://www.linkedin.com/in/imanurag2311/'
    },
    {
        name: 'Archita Bhattacharya',
        role: 'Cloud Computing Explorer | Aspiring DevOps Engineer',
        imageSrc: './assets/members/archita.jpg',
        profileLink: 'https://www.linkedin.com/in/imanurag2311/'
    },    {
        name: 'Ayush Kumar',
        role: 'CSE Enthusiast, Video Editor',
        imageSrc: './assets/members/ayush.jpg',
        profileLink: 'https://www.linkedin.com/in/imanurag2311/'
    },    {
        name: 'Kanchan Rai',
        role: 'Building with ML | Designing | GDG On Campus Lead',
        imageSrc: './assets/members/kanchan.jpg',
        profileLink: 'https://www.linkedin.com/in/imanurag2311/'
    },    {
        name: 'Pratham Gaur',
        role: '2nd Year B.Tech CSE Data Science | @Amity University Noida  | Python | NPTEL IIT Madras Python | MySQL | C Programming | Learning C++ Programming and Web Development',
        imageSrc: './assets/members/pratham.jpg',
        profileLink: 'https://www.linkedin.com/in/imanurag2311/'
    },    {
        name: 'Priyansi Nayak',
        role: 'Operations & PR/Editorial Team @ MLSC',
        imageSrc: './assets/members/priyansi.jpg',
        profileLink: 'https://www.linkedin.com/in/imanurag2311/'
    },    {
        name: 'Reeti Mehra',
        role: 'Psychology, working as an intern in 2 ngos right now',
        imageSrc: './assets/members/reeti.jpg',
        profileLink: 'https://www.linkedin.com/in/imanurag2311/'
    },    {
        name: 'Saisha Goel',
        role: 'AI/ML Enthusiast || Content Writer || Aspiring Developer || CSE’27',
        imageSrc: './assets/members/saisha.jpg',
        profileLink: 'https://www.linkedin.com/in/imanurag2311/'
    },    {
        name: 'Shiven Vasan',
        role: 'Student | Part time Philosopher',
        imageSrc: './assets/members/shiven.jpg',
        profileLink: 'https://www.linkedin.com/in/imanurag2311/'
    },    {
        name: 'Simran',
        role: 'undergraduate in btech cse | web development and aiml enthusiast',
        imageSrc: './assets/members/simran.jpg',
        profileLink: 'https://www.linkedin.com/in/imanurag2311/'
    },
    ,    {
        name: 'Yashika Verma',
        role: 'B.Tech Artificial Intelligence Student | Intern @ Codsoft | Joint Secretary @ ASET | Event Organizer | Oman Women\'s National Cricket Team Ex-Member |',
        imageSrc: './assets/members/yashikav.jpg',
        profileLink: 'https://www.linkedin.com/in/imanurag2311/'
    },
];

// Function to generate team members dynamically
function generateTeamMembers() {
    const listContainer = document.getElementById('teamMembersList');

    teamMembers.forEach((member, index) => {
        // Create list item (li) element
        const listItem = document.createElement('li');
        listItem.className = 'group border bg-vulcan-800 border-white/5 overflow-hidden rounded-3xl shadow-vulcan-950 shadow-2xl';

        // Create anchor element
        const anchor = document.createElement('a');
        anchor.href = member.profileLink;
        anchor.title = `Team Member`;

        // Create image container and image
        const imageContainer = document.createElement('div');
        imageContainer.className = 'flex items-end shadow-2xl shadow-vulcan-950 justify-center overflow-hidden rounded-t-3xl';
        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'flex object-cover';
        const image = document.createElement('img');
        image.height = 500;
        image.width = 560;
        image.src = member.imageSrc;
        image.alt = member.name;
        image.className = 'group-hover:scale-110 duration-300';
        image.loading = 'lazy';

        imageWrapper.appendChild(image);
        imageContainer.appendChild(imageWrapper);
        anchor.appendChild(imageContainer);

        // Create member details container
        const detailsContainer = document.createElement('div');
        detailsContainer.className = 'p-8';

        // Create member name
        const name = document.createElement('h3');
        name.className = 'mt-5 text-lg font-medium leading-6 text-white';
        name.textContent = member.name;

        // Create member role
        const role = document.createElement('p');
        role.className = 'mt-2 text-base text-vulcan-300 line-clamp-1 text-white';
        role.textContent = member.role;

        detailsContainer.appendChild(name);
        detailsContainer.appendChild(role);

        // Append anchor and details container to list item
        listItem.appendChild(anchor);
        listItem.appendChild(detailsContainer);

        // Append list item to the team members list container
        listContainer.appendChild(listItem);
    }
)}  

  // Call function to generate team members
  generateTeamMembers();
