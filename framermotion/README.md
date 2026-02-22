### Theory: 

motion is a factory object provided by Framer Motion that enables animation capabilities for React components. It provides animated versions of HTML and SVG elements and supports declarative animations, gestures, layout transitions, and scroll-based effects.

---
1. <motion.element> for animating a specific element. It also has various props to it.
- Initial: to define initial state of the components before it enters the DOM. 
    eg: initial={{ opacity: 0 }}
- Animate: use to create animations, lets you set target value.
    eg: animate={{ opacity: 1 }}
- Exit: animation when component is removed from the React tree, smooth transition for unmounting/removing element.
    works with <AnimatePresence>
- Transition: Controls timing, easing, delay, type.
    eg: transition={{ duration: 0.5, ease: "easeInOut" }}

2. Variants: Variants allow reusable animation states.
eg: 
    const cardVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    }
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    />

3. AnimatePresence: Used to enable exit animations when components unmount.
eg: 
  <AnimatePresence>
    {isVisible && (
      <motion.div exit={{ opacity: 0 }} />
    )}
  </AnimatePresence>

4. Stagger Animations: Used for animating multiple children sequentially. Typically used with parent-child variant structure.
eg: 
    const container = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.2
        }
      }
    }

5. Layout Animations: Automatically animates position changes.
eg: 
    <motion.div layout />
  If items reorder, they smoothly transition.

6. Shared Layout Animations: Uses layoutId to create smooth transitions between components across renders or routes.
eg: 
    <motion.div layoutId="card" />
  Allows smooth transformation between elements across routes.

7. Gestures: Framer supports built-in gestures
- whileHover
- whileTap
- drag
- dragConstraints
eg: 
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={{ left: 0, right: 300 }}
    />

8. Scroll-Based Animations uses useScroll() and useTransform()

9. Transformation: 
    Framer Motion primarily animates transform-based properties:
    - translateX / translateY
    - scale
    - rotate
    - skew
    Using transforms instead of layout properties (like width/height) improves performance because it avoids layout recalculations.

10. Transition: 

- Duration: how long the animation takes
- Easing: the speed curve of the animation
- Delay: How long to wait before starting the animation

11. Additional Important Concepts
- Declarative Animation: Framer Motion is declarative you describe the final state, and the library handles the animation.

- Spring Animations: Framer supports physics-based animations eg: transition={{ type: "spring", stiffness: 100, damping: 10 }}

- Keyframes: You can define multiple animation states eg: animate={{ x: [0, 100, 0] }}
