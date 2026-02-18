export default function DecisionEngine() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-muted border-b border-border">
        <div className="container py-16">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-4">
            Interactive Tool
          </div>
          <h1 className="serif text-5xl font-bold text-foreground mb-4">
            Decision Engine
          </h1>
          <p className="sans text-xl text-muted-foreground max-w-3xl">
            Find the right AI capability for your task in maximum 3 clicks. Navigate from high-level goals to specific, actionable guidance.
          </p>
        </div>
      </section>

      <div className="container py-16">
        <div className="editorial-card p-8 mb-12">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663217616423/dswAeLAUBgJqxjFH.png"
            alt="Decision Engine: Maximum 3 Clicks to a Recommendation"
            className="w-full h-auto"
          />
          <p className="sans text-sm text-muted-foreground mt-4 italic text-center">
            Figure 2: Decision tree showing the 3-click navigation flow
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="editorial-card p-8 mb-8">
            <h2 className="serif text-3xl font-bold text-foreground mb-6">
              How It Works
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "What are you trying to do?",
                  description: "Choose from 9 high-level goals: Learn, Create, Decide, Improve, Get help, Have fun, Develop, Communicate, or Explore.",
                },
                {
                  step: "2",
                  title: "What kind of task?",
                  description: "Narrow down to a specific category within your chosen domain.",
                },
                {
                  step: "3",
                  title: "What specific capability?",
                  description: "Select the exact capability that matches your need, complete with example prompts and thinking frameworks.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center serif text-xl font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="serif text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="sans text-base text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="editorial-card p-8 bg-accent/5 border-accent">
            <h3 className="serif text-2xl font-bold text-foreground mb-4">
              Why Maximum 3 Clicks?
            </h3>
            <p className="sans text-base text-foreground leading-relaxed mb-4">
              Research shows that users abandon navigation after 3-4 levels of depth. The decision engine is designed to prevent overwhelm by ensuring you reach actionable guidance quickly.
            </p>
            <p className="sans text-base text-foreground leading-relaxed">
              Each path is carefully structured to balance specificity with simplicity, guiding you from broad intent to precise capability without cognitive overload.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
