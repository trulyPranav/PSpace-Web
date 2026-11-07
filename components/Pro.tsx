const perks = [
  ['Export', 'Take everything out as a plain zip.'],
  ['Backup and restore', 'Keep a copy and bring it to a new phone.'],
  ['Hidden space', 'Keep chosen folders and files out of sight.'],
  ['Unlimited folders', 'Beyond the free limit, as many as you need.'],
  ['Unlimited pins', 'Pin as many chats, files and folders as you like.'],
  ['Accent colours', 'Make PSpace yours with extra colour themes.'],
  ['App icons', 'Choose a different icon for your home screen.'],
  ['Repeating reminders', 'Reminders that repeat daily, weekly or monthly.'],
];

/** What PSpace Pro adds, as a quiet grid of cards. */
export default function Pro() {
  return (
    <div className="perks">
      {perks.map(([title, body]) => (
        <div className="perk" key={title}>
          <strong>{title}</strong>
          <span>{body}</span>
        </div>
      ))}
    </div>
  );
}
