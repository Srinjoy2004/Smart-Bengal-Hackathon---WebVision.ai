import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Loader2, X, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import RevealOnScroll from "./RevealOnScroll";
import axios from "axios";

const DemoSection: React.FC = () => {
  const [urls, setUrls] = useState(["", "", ""]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showFullReport, setShowFullReport] = useState(false);
  const [compareResults, setCompareResults] = useState<any>(null);
  const { toast } = useToast();

  const handleUrlChange = (index: number, value: string) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  const validateUrls = () => {
    const filledUrls = urls.filter((url) => url.trim() !== "");
    if (filledUrls.length !== 3) {
      toast({
        title: "Error",
        description: "Please provide exactly three URLs for comparison",
        variant: "destructive",
      });
      return false;
    }

    try {
      const domains = filledUrls.map((url) => {
        const urlObj = new URL(url);
        return urlObj.hostname;
      });

      const uniqueDomains = new Set(domains);
      if (uniqueDomains.size > 1) {
        toast({
          title: "Warning",
          description: "For best results, compare websites from the same domain",
        });
      }

      return true;
    } catch (error) {
      toast({
        title: "Error",
        description: "Please enter valid URLs (e.g., https://example.com)",
        variant: "destructive",
      });
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateUrls()) return;

    setIsAnalyzing(true);
    setProgress(0);
    setShowFullReport(false);

    try {
      // Call Route: /process-urls
      const response = await axios.post("http://localhost:5000/process-urls", {
        urls: urls,
      });

      setCompareResults({
        rankings: response.data.rankings,
        suggestions: response.data.suggestions,
      });

      // Simulate progress
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsAnalyzing(false);
            setIsComplete(true);
            return 100;
          }
          return prev + 5;
        });
      }, 250);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to analyze websites. Please ensure the backend server is running and try again.",
        variant: "destructive",
      });
      setIsAnalyzing(false);
      setIsComplete(false);
      setProgress(0);
      setShowFullReport(false);
      setCompareResults(null);
    }
  };

  const handleReset = () => {
    setUrls(["", "", ""]);
    setIsAnalyzing(false);
    setIsComplete(false);
    setProgress(0);
    setShowFullReport(false);
    setCompareResults(null);
  };

  const handleGetFullReport = () => {
    if (!compareResults || !compareResults.rankings || !compareResults.suggestions) {
      toast({
        title: "Error",
        description: "No analysis data available. Please try comparing websites again.",
        variant: "destructive",
      });
      return;
    }

    setShowFullReport(true);

    toast({
      title: "Full Comparison Report Generated",
      description: "Your comprehensive website comparison analysis is ready!",
      duration: 3000,
    });
  };

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Compare Websites Instantly
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Discover the strengths of multiple websites with WebVision AI. Enter up to three URLs to compare their design, performance, and content, and get actionable insights.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-gray-900/80 backdrop-blur-sm border border-blue-500/20 p-8 rounded-2xl shadow-2xl">
            {!isComplete ? (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6 mb-8">
                  {urls.map((url, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-4 items-center">
                      <span className="text-blue-400 font-semibold w-24 text-center md:text-right">
                        Website {index + 1}:
                      </span>
                      <Input
                        type="url"
                        placeholder={`Enter website URL (e.g., https://example.com)`}
                        className="flex-1 bg-gray-800 border-blue-500/30 focus:border-blue-500 focus:ring-blue-500/50 text-white placeholder-gray-400 rounded-lg"
                        value={url}
                        onChange={(e) => handleUrlChange(index, e.target.value)}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mt-6">
                  <Button
                    type="submit"
                    className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50"
                    disabled={isAnalyzing}
                  >
                    <span className="flex items-center">
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="mr-2 animate-spin" size={20} />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          Compare Websites <ArrowRight className="ml-2" size={20} />
                        </>
                      )}
                    </span>
                  </Button>
                </div>

                {isAnalyzing && (
                  <div className="mt-10">
                    <div className="flex justify-between mb-3">
                      <span className="text-sm text-gray-400">Analyzing websites...</span>
                      <span className="text-sm text-blue-400">{progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {["Comparing Designs", "Analyzing Performance", "Evaluating Content", "Ranking Elements"].map(
                        (item, index) => (
                          <div
                            key={item}
                            className={`p-5 rounded-lg bg-gray-800/50 border border-blue-500/30 ${progress > index * 25 ? "animate-pulse" : ""}`}
                          >
                            <div className="text-xs uppercase text-gray-400 mb-2">{item}</div>
                            <div className="h-2 bg-gray-700 rounded-full">
                              {progress > index * 25 && (
                                <div
                                  className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                                  style={{ width: `${Math.min(100, Math.max(0, (progress - index * 25) * 4))}%` }}
                                ></div>
                              )}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </form>
            ) : (
              <div>
                {!showFullReport && compareResults ? (
                  <>
                    <div className="flex items-center justify-center mb-8">
                      <CheckCircle className="text-green-500" size={56} />
                    </div>
                    <h3 className="text-3xl font-bold mb-6 text-center text-white">Analysis Complete!</h3>
                    <p className="text-lg text-gray-300 mb-8 text-center">
                      Here are the rankings based on similarity scores for each section.
                    </p>

                    <div className="bg-gray-800/50 border border-blue-500/20 p-6 rounded-xl mb-10">
                      <h4 className="text-xl font-semibold mb-4 flex items-center text-white">
                        <Globe size={20} className="text-purple-500 mr-2" />
                        Element Rankings by Section
                      </h4>

                      <div className="space-y-6">
                        {compareResults.rankings.split("\n\n").map((section: string, idx: number) => {
                          if (!section.trim()) return null;
                          const lines = section.split("\n");
                          const sectionTitle = lines[0];
                          const rankings = lines.slice(1).filter((line: string) => line.trim());

                          return (
                            <div key={idx} className="p-4 bg-gray-700/50 rounded-lg">
                              <h5 className="text-lg font-semibold text-blue-400 mb-3">{sectionTitle}</h5>
                              <div className="space-y-3">
                                {rankings.map((rank: string, rIdx: number) => {
                                  const [, position, url, match, similarity] = rank.match(
                                    /(\d)\. (url\d) \(Best Match: ([^,]+),\s*Similarity: ([\d.]+)\)/
                                  ) || [];
                                  const urlIndex = parseInt(url.replace("url", "")) - 1;
                                  const hostname = urls[urlIndex] ? new URL(urls[urlIndex]).hostname : url;

                                  return (
                                    <div
                                      key={rIdx}
                                      className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg"
                                    >
                                      <span className="font-medium text-white">
                                        {position}. {hostname}
                                      </span>
                                      <div className="flex flex-col items-end">
                                        <span className="text-sm text-gray-300">
                                          Best Match: <span className="text-blue-400">{match}</span>
                                        </span>
                                        <span className="text-sm text-gray-300">
                                          Similarity: <span className="text-blue-400 font-semibold">{similarity}</span>
                                        </span>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all"
                        onClick={handleGetFullReport}
                      >
                        View Full Report
                      </Button>
                      <Button
                        variant="outline"
                        className="border-blue-500/50 hover:border-blue-500 text-white bg-transparent hover:bg-blue-500/10 rounded-lg"
                        onClick={handleReset}
                      >
                        Compare Other Websites
                      </Button>
                    </div>
                  </>
                ) : (
                  <RevealOnScroll>
                    <div className="pb-6">
                      <div className="flex items-center justify-between mb-8">
                        <h3 className="text-3xl font-bold text-white">Detailed Comparison Report</h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setShowFullReport(false)}
                          className="hover:bg-blue-500/10"
                        >
                          <X size={24} />
                        </Button>
                      </div>

                      <div className="mb-10">
                        <h4 className="text-xl font-semibold mb-4 flex items-center text-white">
                          <Globe className="mr-2 text-purple-500" size={22} />
                          LLM Suggestions for Best Sections
                        </h4>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          {compareResults?.suggestions?.map((suggestion: any, idx: number) => {
                            const section = suggestion.section_type;
                            const bestMatch = compareResults.rankings
                              .split("\n\n")
                              .find((s: string) => s.includes(`Section: ${section.toUpperCase()}`))
                              ?.split("\n")[1]
                              ?.match(/(\d)\. (url\d) \(Best Match: .+,\s*Similarity: ([\d.]+)\)/);
                            const bestUrl = bestMatch?.[2];
                            const similarity = bestMatch?.[3];
                            const urlIndex = bestUrl ? parseInt(bestUrl.replace("url", "")) - 1 : -1;
                            const hostname = urlIndex >= 0 && urls[urlIndex] ? new URL(urls[urlIndex]).hostname : bestUrl || "Unknown";

                            if (!suggestion || !bestUrl) return null;

                            return (
                              <div key={idx} className="p-4 bg-gray-800/50 rounded-lg border border-blue-500/30">
                                <h5 className="text-lg font-semibold text-blue-400 capitalize mb-3">
                                  {section} ({hostname}, Similarity: {similarity})
                                </h5>
                                {suggestion.suggestions && suggestion.suggestions.length > 0 ? (
                                  <ul className="list-disc list-inside text-sm text-gray-300 space-y-2">
                                    {suggestion.suggestions.map((s: string, sIdx: number) => (
                                      <li key={sIdx} dangerouslySetInnerHTML={{ __html: s.replace(/^\d+\.\s*/, '') }} />
                                    ))}
                                  </ul>
                                ) : (
                                  <p className="text-sm text-gray-400">No suggestions available for this section.</p>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="flex justify-center mt-10">
                        <Button
                          variant="outline"
                          className="border-blue-500/50 hover:border-blue-500 text-white bg-transparent hover:bg-blue-500/10 rounded-lg"
                          onClick={() => setShowFullReport(false)}
                        >
                          Back to Summary
                        </Button>
                      </div>
                    </div>
                  </RevealOnScroll>
                )}
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;