$newCTA = @'
        {/* CTA */}
        <section className="py-12 lg:py-16" style={{ backgroundColor: "#1A9AD2" }}>
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Ready to Improve Your Property?
            </h2>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              Tell us what you need and we&apos;ll help you find the right service for your home or business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#ffffff", color: "#1A9AD2" }}
              >
                GET A FREE QUOTE TODAY
              </Link>
              <a
                href="https://wa.me/27657018482?text=Hi%20Zenako%2C%20I%27d%20like%20a%20quote%20for%20your%20property%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold border-2 border-white text-white hover:bg-white hover:text-[#1A9AD2] transition-colors duration-200"
              >
                <i className="fa-brands fa-whatsapp mr-2 text-lg"></i>
                CHAT ON WHATSAPP
              </a>
            </div>
          </div>
        </section>
'@

# Fix landscaping-property
$file1 = "app/(app)/services/landscaping-property/page.tsx"
$content1 = Get-Content $file1 -Raw
$pattern1 = '(?s)\{/\* CTA \*/\}\r?\n\s+<section className="py-12 lg:py-16".*?</section>'
if ($content1 -match $pattern1) {
    $content1 = $content1 -replace $pattern1, $newCTA
    Set-Content $file1 -Value $content1 -NoNewline
    Write-Host "Updated landscaping-property"
} else {
    Write-Host "Pattern not found in landscaping-property"
}

# Fix property-improvement
$file2 = "app/(app)/services/property-improvement/page.tsx"
$content2 = Get-Content $file2 -Raw
if ($content2 -match $pattern1) {
    $content2 = $content2 -replace $pattern1, $newCTA
    Set-Content $file2 -Value $content2 -NoNewline
    Write-Host "Updated property-improvement"
} else {
    Write-Host "Pattern not found in property-improvement"
}
