// components/NoteItem.jsx
// This component displays one row in the Recent Notes list.
//
// WHAT TO DO IN THIS FILE:
//   - This component receives props: title, date, and className
//     props are how a parent passes data down to a child component
//     you access them like this: function NoteItem({ title, date, className })
//   - On the left side show a file icon, the note title, the class name, and the date
//   - On the right side show two icon buttons: download and delete
//   - Display the prop values inside the JSX using curly braces: {title}
//
// HINT: This component will be reused for every note in the list
//       that's why it takes props — so the same component can show different data

export default function NoteItem({ title, date, className }) {
  return (
    <div>
      {/* your note row content goes here */}
    </div>
  );
}