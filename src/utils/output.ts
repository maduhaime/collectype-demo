function argsToString(args: any[]): string {
  return args
    .map((arg) =>
      typeof arg === "object"
        ? `<pre>${JSON.stringify(arg, null, 2)}</pre>`
        : `<span>${String(arg)}</span>`
    )
    .join(" ");
}

export function template(title: string, ...args: any[]): string {
  return `
    <section class="section py-3">
      <div class="container">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">${title}</p>
          </header>
          <div class="card-content">
            <div class="content">
              <p>${argsToString(args)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Helper pour afficher des logs HTML dans un gabarit Bulma
export function output(id: string, title: string, ...args: any[]) {
  const html = template(title, ...args);
  const el = document.getElementById(id);
  if (el) {
    el.insertAdjacentHTML("beforeend", html);
  }
}
