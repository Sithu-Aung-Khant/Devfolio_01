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
