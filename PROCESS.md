# 1/6/2024

## Navbar

#### To create the navbar for my portfolio website, I decided to utilize Tailwind CSS. Here's how I approached building it:

### Font Configuration

I initially configured the font family in the `tailwind.config.js` file, opting for the theme bracket to set it as a default without specifying the font name for every element. However, this approach didn't work as expected, so I later moved the `configuration` to the `extend` bracket. This underscores the importance of practical experimentation in determining what works.

### Light/Dark Mode Implementation

Next, I wanted to incorporate a dark and light mode into my website. Although I had done it with SCSS previously, adapting it to a React app with Tailwind CSS posed a new challenge. I found useful guides for building a toggle switch and implementing dark mode:

- [Tailwind CSS | Dark & Light Theme Switcher](https://www.youtube.com/watch?v=oMOe_32M6ss&ab_channel=JohnKomarnicki)
- [Tailwind CSS Dark Mode | React App Theme Switcher](https://www.youtube.com/watch?v=VylXkPy-MIc&ab_channel=OverClocked)
- [Tailwind CSS Dark/Light/System Base Change Theme With Local Storage | React js dark mode](https://www.youtube.com/watch?v=NMTq5HIxMa8&ab_channel=CodeAProgram)

After a bit of struggle, I successfully added the dark mode toggle switch, incorporating resources from [Lokesh-Sharma](https://www.linkedin.com/pulse/creating-dark-light-mode-tailwind-css-reactjs-guide-beginners-sharma/).

# 1/7/2024

Today, I moved `useState` from the child component `{toggle}` to the parent component `{navbar}` to manipulate the logo icon based on the dark mode of the window. After testing my logic in a new branch, I was delighted to see it worked successfully.

### Adding Dark/Light Button on Mobile View

I decided to include a toggle button beside the menu icon for easy access to dark and light modes. Surprisingly, it was straightforward to implement and style for both modes, thanks to Tailwind CSS.

### Navbar-Complete

The customization for the navbar is now complete. It includes a dark/light mode button that is fully responsive and works seamlessly on both desktop and mobile views. The color scheme of the navbar can be changed using the toggle button.

## Hero Section

I struggle of tailwind way ot doing responsive columns and grid. But I was finally to able to pull out the result I want.
What I want to do is I want my photo to wabbly circle shape. I tried searching for resoruces and here is what I found.

- [01](https://www.smashingmagazine.com/2021/03/css-generators/)
- [02](https://turbofuture.com/internet/CSS-Shapes-Generator)
- [03](https://www.blobmaker.app/)
- [04](https://blog.logrocket.com/15-best-css-shape-generators-demo/#triangles)

While building my portfolio, I found the exact website that I have in my mind. Believe me It was exactly and it amazed me. Even the dark/light concept was the same. see yourselves here folks! [here](httpsf://www.youtube.com/watch?app=desktop&v=27JtRAI3QO8&ab_channel=Bedimcode)

What relief me is that it was two years ago and tech stack are not the same, but It will be easier to take inspiration from it. Damn! the world is too small bro 😆.

I was content with the result for profile background svg. I need to add my photo in the svg tomorrow in canva. The logo icon in the top left corner feels odd to me so I tried to change it. I palyaround in canva, customize icons and design and import svgs to it. After testing 9 svgs I was finally content with the logo I got. It is more engaging, it can draw attention and my name just more clear beside the icon so I choose that icon for the day. That's all for today, It was really well spent day for the project. It is exciting and pleasing at the same time seeing my websites coming into life/reality.

https://swiperjs.com/

# 1/8/2024

Today, I tried to make my profile inside of svg. At first, I feel like It is really hard because I didn't know how. but motivational video from youtube help me though that mentality and I was able to overcome the challenge.

I have put my image inside svg but I have to make it so that it looks like it is inside the svg frame. Tonning up my photo in canva was tricky and I am content with the current result.

I tried with svg first to get a blog image.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="#2D4A53"
    d="M52.4,-19.4C58.7,2.3,48.2,27.1,29.4,40.9C10.5,54.7,-16.6,57.5,-32.9,45.6C-49.1,33.7,-54.5,7.1,-47.2,-16C-39.9,-39.2,-20,-58.9,1.6,-59.4C23.1,-59.9,46.1,-41.2,52.4,-19.4Z"
    transform="translate(100 100)"
  />
  <image href="./001.png" x="38" y="30" width="125" height="125" />
</svg>
```

But later I also want to animate it so I followed through this [tuto](https://www.youtube.com/watch?v=2FiRnukg8eg&ab_channel=Divinector) and apply the concept with tailwind CSS. Here is the solution.

### HTML with Tailwind

```html
<div className="wrapper flex items-center justify-center">
  <div
    className="blob relative bg-cover bg-center shadow-xl animate-class transition-all duration-1000 size-60 bg-[url('./cyan.png')]"
  ></div>
</div>
```

### CSS

```css
@keyframes animate {
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
}

.animate-class {
  animation: animate 8s ease-in-out infinite;
}
```

# 1/9/2024

Today, I want to add typing effects on my hero text. After scrapping through tuturials, I was finlly able to make it work .
Here are the resources that helped me when I am figuring out

- [Typed.css](https://typedcss.com/)
- [10+ CSS Typing Effects](https://freefrontend.com/css-typing-text/)
- [gradient typing text effects](https://codepen.io/ladyjellington/pen/qBBQBYy)

The type animation is looking good but I want to pause at the end of the animation before it goes backwards. I searched through tutorial and when I found this [tuto](https://www.youtube.com/watch?v=ccO2B40zkv4&ab_channel=OnlineTutorials) I quickly learn, try and finally I was able to pull out the result I want.

Now what I want it I want to highlight the text of my name and some important text I want to highlight. so researching begins!

I also need to add rounded shadow to my profile photos in canva cus I can't do inner and shadow at the same time in tailwind CSS.

# 1/10/2024

Today, I've done choosing font family for hero paragraph. I used `Work Sans` font. Now I will try adding highlight to the text I want to. This video [Low Highlight Text Effect CSS ](https://www.youtube.com/watch?v=WKgkWL7RXXQ&ab_channel=CodingArtist) helped me to grasp the concept behind the effect and after that I reapply it with tailwind.

# 1/11/2024

Yesterday, I tried to use icons from font awesome. To do that i happen to install bable-plugin and it got error. I don't know why but after debugging all the morning, I was able to go back to the state that I haven't installed babel plugin and it works find again. Now what I need to do is instead ot adding icons through dynamic import I will try adding individually.

I spent all day to figure this out and when I found out, I feel dumb. Af first the icons I want to add (github & linked) icon are not available in the version 6. it says so in website. so I tried to install font awesome 5 which I cant and it fraustrated me. when I apply the icon path as the individual guide says, the console log says it is not in the file path they give. I was so clueless why I can't use these icons. but when I carefull read through the dependecies I install, there are there version, and what is happening was, I was importing icons as the into documentation says from `free-solid-svg-icons` but they are moved to 'free-brands-svg-icons` for social media related icons and they didn't mention in the documentation. so I had to spent all day to figure that out. At the end of the day I was importing the icon from the wrong path.

```
 "@fortawesome/free-brands-svg-icons": "^6.5.1",
  "@fortawesome/free-regular-svg-icons": "^6.5.1",
  "@fortawesome/free-solid-svg-icons": "^6.5.1",
```

After that, I debug color opacity problem when I open menu button in light mode. I can see the underlying layer and I don't want to do that. I was feeling stuck to debug this when I was coding navbar and now what I found out was the color I set for `white ` with rbg and it has `0.87` opacity in it. It was causing the problem and I didn't notice it. I thought it was the color problem. At the end of the day it was just overlooking something cause it and sometimes tiny little things are what cause the problem. You just have to have patience and look through it.

After styling for both dark & light mode. It is so tricky to go the icon and click again and again so I tried to add keyboard shorcut keys for opening dark & light mode. With the help for chat gpt I was able to implement this feature easily.

1/12/2024

I created social component and added icons and links for my social accounts. At first the sample jsx was very bloat and I thought I can reduce the code with js array methods. I am so proud of myself for coming up with this idea. After that. I play around and figure out which play of the screen is the best suitable for palcing my social icons.

when I text responsiveness for my design. I found out that the text are a little bit too small so I make bigger the sizes of the overall text.

One thing I struggled was responsive of the widths I created. At first the width of the columsn are find but when I add social icons as the third column chaos happen and I had to spent a lot of time to balance the width, style between different screen sizes.

# 13/1/2024

Today- After I moved the social icons to thr right, I am content with the design so I won't test putting them at the bottom and I will add other features instead.

What I want to add right now is the mouse scroll icons with animation to encourage users to scroll down. I was able to implement the feature I wanted.

# 14/1/2024

I added about me component. reduce font-size a little bit because I was styling the website with 90% zoom entire time. I didn't know when it accidentally did it but glad I notice before too soon.

# 15/1/2024

I try styling for who am I section and then I moved to qualification section. I want to apply the same style from the inspiration website but it is build with SASS so I have to look at them and have to figure out how can I apply the same with tailwind.

# 16/1/2024

- I was able to figure out grid system for the layout and apply it perfectly. Now what I want to do is conditionally render the two tabs I created.
  After that, I Refactor the Qualification to reduce duplication and improve maintainability by introducing smaller, reusable components.

# 17.1.2024

- Today I will add links for my certifications on the education tab.
- Add styles for when hovering.
- add cv download button.

# 21.1.2024

I rearrange hero section image and text for look good in every view points.

# 22.1.2024

I replace fontawesome icons with svgs from canva and it look slick. I also design contact me section for optimal appealing in every screen size. What I realized was I have to import validation to my contact form and I will try importing those features today.

# 26.1.2024

Today, is the day I refocus on building this site after a long break. Today I will build footer component. To do that I need to make my logo and name as a component and reuse it in the footer.

# 28.1.2024

Today, I want to try some footer page from canva to my portfolio website.
After implementing it to my website, I really love it and want to import entire design concept to my portfolio. So Today, I will restyle projects sections, after that I will move to about me and hero section.

I have finalized footer section so I will delete footer and contact component and rename work-together component to footer.

# 30.1.2024

Today morning, I have finalized project section UI for desktop version. I will have to work on mobile and other devices in the evening.
I couldn't sleep so I build intro section at 3 am in the morining.

# 31.1.2024

- Change Dark/Light Toggle from shancnUi Switch
- update navbar to center and reference design from navigtation menu and Tabs

Refactor: Consolidate Imports in App Component

Created an external 'index' file to streamline import statements in the App component. Moved import lines for various components into the 'components/index.js' file, reducing clutter and improving code organization. This change enhances code readability and maintainability.

# 1.2.2024

- Change Projects to link
- Add Resume Download feature
- Change Tech Stack Design

# 4.2.2024

- Make Resume Downloadable
- Change Projects Case Study Button Design
- Add description of projects
- make about nav in desktop view collapsed
